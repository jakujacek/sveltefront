# Svelte front

Projekt *sveltefront* wykorzystuje [Routify](https://routify.dev/) jako nakładkę na framework/kompilator
[Svelte](https://svelte.dev/). W projekcie wykorzystywany jest również framework do CSS: [Tailwind](https://tailwindcss.com/). Poniższa instrukcja krok po kroku przeprowadza przez proces instalacyjny oraz konfigurację edytora.

### Instalacja
Wymagania: node >= v12;

1. Pobieramy repozytorium komendą: `git clone https://github.com/jakujacek/sveltefront.git`
2. Następnie `cd sveltefront`
3. `npm install`

### Konfiguracja edytora

Do pracy z projektem będziemy wykorzystywać edytor: *Visual Studio Code*. Żeby projekt działał poprawnie należy dokonać zmian w konfiguracji edytora. Wciskamy przyciski `ctrl + p` i wpisujemy `settings.json`. Wchodzimy w plik i dodajemy:
```
"eslint.validate": [
    "javascript",
    "svelte"
  ],
  "prettier.configPath": ".prettierrc"
```
Zapisujemy zmiany i wychodzimy.
Nasz edytor został skonfigurowany.

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
