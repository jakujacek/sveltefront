# Svelte front

Projekt *sveltefront* wykorzystuje [Routify](https://routify.dev/) jako nakładkę na framework/kompilator
[Svelte](https://svelte.dev/). W projekcie wykorzystywany jest również framework do CSS: [Tailwind](https://tailwindcss.com/). Poniższa instrukcja krok po kroku przeprowadza przez proces instalacyjny oraz konfigurację edytora.

### Instalacja
Wymagania: node >= v12;

1. Pobieramy repozytorium komendą: `git clone https://github.com/jakujacek/sveltefront.git`
2. `cd sveltefront`
3. `npm install`

### Konfiguracja edytora

Do pracy z projektem będziemy wykorzystywać edytor: *Visual Studio Code*. W projekcie jest już zawarty folder `.vscode`, w którym skonfigurowany jest edytor. Konfiguracja ta jest konieczna, żeby pliki `*.svelte` działały wraz z `eslintem` i `prettierem`. Na starcie wyłączone jest formatowanie plików na zapis. Opcję tę można włączyć, nie należy jednak zmian w tym pliku wypychać do repozytorium.

Wymagane/rekomendowane rozszerzenia do edytora:
1. ESLint,
2. Prettier - Code formater,
3. Svelte,
4. Svelte Intelisense,
5. Tailwind CSS IntelliSense,
6. GitLens

### Skrypty package.json

Wersję developerską uruchamia się poprzez komendę: `npm run dev`;

Poniższa tabela przedstawia i tłumaczy część komend:

| Komenda           | Opis                                                                       |
|------------------|-----------------------------------------------------------------------------------|
| `dev`            | wersja developerska (port 5000)                                                           |
| `dev-dynamic`    | Wersja developerska z dynamicznymi importami                                                  |
| `build`          | Zbudowanie zbundlowanej wersji aplikacji jako SSR +  prerendering oraz z dynamicznymi importami            |
| `serve`          | Podgląd po zbundlowaniu. Serves SPA on 5000 and SSR on 5005                  |
| `deploy:*`       | Deploy do netlify lub now: `npm run deploy:(now|netlify)`                                                        |
| `export`         | Stworzenie strony statycznej w folderze `/dist`                              |
| `prettier`       | Sprawdza formatowanie plików                                                 |
| `prettier-fix`    | Poprawia źle zformatowane pliki                                              |
