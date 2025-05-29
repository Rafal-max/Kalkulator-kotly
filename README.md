# Kalkulator doboru kotła na pellet (Kostrzewa)

Prosty kalkulator internetowy w stylu strony Kostrzewa. Pozwala obliczyć zapotrzebowanie na moc kotła na dwa sposoby:

1. **Na podstawie zużycia poprzedniego paliwa** – użytkownik podaje typ oraz ilość paliwa, a skrypt wykorzystuje jego wartość opałową do wyznaczenia średniej mocy.
2. **Na podstawie parametrów budynku** – obliczenia zgodne z przyjętymi normami, w zależności od standardu energetycznego i powierzchni budynku.

Dostępny jest panel administratora (domyślne dane logowania `admin`/`admin`). Umożliwia zmianę parametrów użytych w algorytmie oraz zmianę danych logowania. Parametry i dane logowania są przechowywane w `localStorage` przeglądarki.

Projekt można hostować na Vercel jako statyczną stronę.
