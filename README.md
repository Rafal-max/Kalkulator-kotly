# Kalkulator doboru kotła na pellet (Kostrzewa)

Responsywny kalkulator wielopaliwowy inspirowany kolorystyką producenta Kostrzewa. Strona korzysta z Bootstrap i pozwala oszacować wymaganą moc kotła na dwa sposoby.

1. **Zużycie poprzedniego paliwa** – wybór typu paliwa i ilości pozwala policzyć energię zawartą w zużytym paliwie. Energia dzielona jest przez zakładany okres sezonu grzewczego (180 dni) i przeliczana na średnią moc kotła.
2. **Parametry budynku** – użytkownik podaje powierzchnię, jakość izolacji, liczbę pięter oraz mieszkańców i opcjonalne ogrzewanie CWU. Zapotrzebowanie liczona jest według wzoru:

```
P = (A * F_i * (1 + f_f*(n-1)))/1000 + (C*Q)
```

Gdzie:
- `A` – powierzchnia budynku w m²,
- `F_i` – współczynnik zależny od jakości izolacji (40–100 W/m²),
- `f_f` – procentowy wpływ kolejnych kondygnacji (domyślnie 0.05),
- `n` – liczba kondygnacji,
- `C` – stała mocy potrzebnej do przygotowania ciepłej wody użytkowej na osobę (domyślnie 0.2 kW),
- `Q` – liczba mieszkańców jeżeli ogrzewana jest również woda użytkowa.

Otrzymana moc jest zwiększana o 20% rezerwy na warunki skrajne.

Panel administratora pozwala modyfikować wartości opałowe paliw oraz parametry używane w powyższym wzorze. Dane zapisywane są w `localStorage` i mogą być w każdej chwili zmienione.

Domyślne dane logowania: `admin` / `admin`.

Projekt można hostować na Vercel jako statyczną stronę.
