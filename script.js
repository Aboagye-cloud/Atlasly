// ===== Atlasly - World Countries Explorer =====

// REST Countries v5 (requires a free API key)
const API_BASE = 'https://api.restcountries.com/countries/v5';
const API_KEY = 'rc_live_b871385ac1614d8b8a63fa7dd866fa2c';

const PAGE_SIZE = 100; // free plan maximum per request
const FIELDS = [
    'codes.alpha_2',
    'names.common',
    'names.official',
    'capitals',
    'region',
    'subregion',
    'continents',
    'population',
    'currencies',
    'languages',
    'flag.url_png'
].join(',');

// Changed from the old key so the app fetches fresh data instead of using the broken cache
const CACHE_KEY = 'atlasly:countries:v5';
const CACHE_TTL = 24 * 60 * 60 * 1000; // refresh once a day (saves monthly API requests)
const REQUEST_TIMEOUT = 10000;         // 10 seconds per request

// DOM references
let countriesContainer;
let searchInput;
let continentFilter;
let loadingMessage;
let noResults;

// Data
let allCountries = [];

// ---------- API + caching ----------

// Convert a v5 country object into the shape the UI uses
function normalizeCountry(raw) {
    const name = raw.names?.common ?? 'Unknown';
    const code = raw.codes?.alpha_2 ?? '';

    // Use the API's flag image if provided, otherwise build the link from the country code
    const flagUrl = raw.flag?.url_png
        || (code ? `https://flags.restcountries.com/v5/w320/${code.toLowerCase()}.png` : '');

    const capitals = (raw.capitals ?? [])
        .map(c => (typeof c === 'string' ? c : c.name))
        .filter(Boolean);

    const currencies = Object.values(raw.currencies ?? {})
        .map(c => c?.name)
        .filter(Boolean);

    const languages = (raw.languages ?? [])
        .map(l => (typeof l === 'string' ? l : (l.english_name ?? l.english ?? l.name)))
        .filter(Boolean);

    const continents = raw.continents ?? [];

    return {
        name,
        code,
        flagUrl,
        flagAlt: `Flag of ${name}`,
        capitals,
        capital: capitals.length ? capitals.join(', ') : 'N/A',
        population: raw.population ?? 0,
        region: raw.subregion || raw.region || 'N/A',
        continents,
        continent: continents[0] ?? raw.region ?? 'N/A',
        currency: currencies.slice(0, 3).join(', ') || 'N/A',
        languages: languages.slice(0, 3).join(', ') || 'N/A'
    };
}

function readCache() {
    try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
        return cached && Array.isArray(cached.data) ? cached : null;
    } catch {
        return null;
    }
}

function writeCache(data) {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data }));
    } catch {
        // Storage full or blocked; the app still works without a cache
    }
}

// Fetch one page of countries
async function requestPage(offset) {
    const params = new URLSearchParams({
        response_fields: FIELDS,
        limit: PAGE_SIZE,
        offset: offset
    });

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
        const response = await fetch(`${API_BASE}?${params}`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` },
            signal: controller.signal
        });

        const body = await response.json().catch(() => null);

        if (!response.ok) {
            const apiMessage = body?.errors?.[0]?.message;
            throw new Error(`API error ${response.status}${apiMessage ? ': ' + apiMessage : ''}`);
        }

        return body.data;
    } finally {
        clearTimeout(timer);
    }
}

// Fetch every page until the API says there are no more
async function fetchFromApi() {
    if (!API_KEY || API_KEY === 'paste-your-new-key-here') {
        throw new Error('No API key set in script.js');
    }

    const countries = [];
    let offset = 0;

    while (true) {
        const data = await requestPage(offset);
        const objects = data?.objects ?? [];
        countries.push(...objects);

        if (!data?.meta?.more || objects.length === 0) break;
        offset += PAGE_SIZE;
    }

    return countries
        .map(normalizeCountry)
        .sort((a, b) => a.name.localeCompare(b.name));
}

// Use fresh cache if available; otherwise fetch. If the fetch fails, fall back to older cache.
async function getCountries() {
    const cached = readCache();
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        return cached.data;
    }

    try {
        const data = await fetchFromApi();
        writeCache(data);
        return data;
    } catch (error) {
        if (cached) {
            console.warn('Could not reach the API, showing cached data.', error);
            return cached.data;
        }
        throw error;
    }
}

// ---------- Rendering ----------

function initializeDOMElements() {
    countriesContainer = document.getElementById('countriesContainer');
    searchInput = document.getElementById('searchInput');
    continentFilter = document.getElementById('continentFilter');
    loadingMessage = document.getElementById('loadingMessage');
    noResults = document.getElementById('noResults');
}

function showLoadingMessage(text) {
    if (loadingMessage) {
        loadingMessage.textContent = text;
        loadingMessage.style.display = 'block';
    }
}

function hideLoadingMessage() {
    if (loadingMessage) loadingMessage.style.display = 'none';
}

function formatPopulation(population) {
    return population ? population.toLocaleString() : 'N/A';
}

// Builds a card with DOM methods and textContent, so API data is never parsed as HTML
function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card';

    const flag = document.createElement('div');
    flag.className = 'country-flag';

    if (country.flagUrl) {
        const img = document.createElement('img');
        img.src = country.flagUrl;
        img.alt = country.flagAlt;
        img.loading = 'lazy';
        // If the image still fails, show the country code instead of the long alt text
        img.onerror = () => {
            flag.textContent = country.code || 'No flag';
        };
        flag.appendChild(img);
    } else {
        flag.textContent = country.code || 'No flag';
    }

    const info = document.createElement('div');
    info.className = 'country-info';

    const name = document.createElement('div');
    name.className = 'country-name';
    name.textContent = country.name;
    info.appendChild(name);

    const rows = [
        ['Continent', country.continent],
        ['Region', country.region],
        ['Capital', country.capital],
        ['Population', formatPopulation(country.population)],
        ['Currency', country.currency],
        ['Languages', country.languages]
    ];

    rows.forEach(([label, value]) => {
        const item = document.createElement('div');
        item.className = 'info-item';

        const labelEl = document.createElement('span');
        labelEl.className = 'info-label';
        labelEl.textContent = label + ':';

        const valueEl = document.createElement('span');
        valueEl.className = 'info-value';
        valueEl.textContent = value;

        item.append(labelEl, valueEl);
        info.appendChild(item);
    });

    card.append(flag, info);
    return card;
}

function displayCountries(countries) {
    if (!countriesContainer || !noResults) return;

    countriesContainer.innerHTML = '';

    if (countries.length === 0) {
        noResults.style.display = 'block';
        countriesContainer.style.display = 'none';
        return;
    }

    noResults.style.display = 'none';
    countriesContainer.style.display = 'grid';

    const fragment = document.createDocumentFragment();
    countries.forEach(country => fragment.appendChild(createCountryCard(country)));
    countriesContainer.appendChild(fragment);
}

// ---------- Search + filter ----------

function applyFilters() {
    if (!searchInput || !continentFilter) return;

    const term = searchInput.value.trim().toLowerCase();
    const continent = continentFilter.value;

    const filtered = allCountries.filter(country => {
        const matchesSearch = !term ||
            country.name.toLowerCase().includes(term) ||
            country.region.toLowerCase().includes(term) ||
            country.capitals.some(cap => cap.toLowerCase().includes(term));

        const matchesContinent = !continent || country.continents.includes(continent);

        return matchesSearch && matchesContinent;
    });

    displayCountries(filtered);
}

// ---------- Loading ----------

async function loadCountries() {
    showLoadingMessage('Loading countries...');
    try {
        allCountries = await getCountries();
        hideLoadingMessage();
        applyFilters();
    } catch (error) {
        console.error('Error loading countries:', error);
        const reason = error?.name === 'AbortError'
            ? 'the request timed out'
            : (error?.message || 'unknown error');
        showLoadingMessage(
            `Could not load countries (${reason}). Check your API key and internet connection, then refresh. ` +
            'Press F12 and open the Console tab for details.'
        );
    }
}

// ---------- Dark mode + back to top ----------

function setupDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    if (!toggle) return;

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        toggle.textContent = '☀️ Light Mode';
    }

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        toggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}

function setupBackToTop() {
    const button = document.getElementById('backToTop');
    if (!button) return;

    window.addEventListener('scroll', () => {
        button.classList.toggle('show', window.pageYOffset > 300);
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ---------- Start ----------

document.addEventListener('DOMContentLoaded', () => {
    initializeDOMElements();

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (continentFilter) continentFilter.addEventListener('change', applyFilters);

    setupDarkMode();
    setupBackToTop();
    loadCountries();
});
