# Currency Converter

This repository contains a web application built using HTML, CSS, and JavaScript. The application allows users to view country flags and convert currency values using external APIs.

## Features

- **Country Flag Display**: View the flag of any country.
- **Currency Converter**: Convert the value of currencies from one country to another.
- 
## Usage

1. **Country Flag Display**
   - Enter the code of a country to view its flag.
   - The application uses the following API to fetch country flags:
     ```plaintext
   [  https://restcountries.com/v3.1/name/{country}](https://flagsapi.com/${countrycode}/flat/64.png)
     ```

2. **Currency Converter**
   - Select the currencies you want to convert from and to.
   - Enter the amount to be converted.
   - The application uses the following API to fetch currency conversion rates:
     ```plaintext
   https://api.currencyapi.com/v3/latest?apikey=cur_live_XKB4tFGFfYeT71idDohTemUPvbs95DenoCk4X26g
     ```

## API Documentation

### Country Flag API

- **Endpoint**: `https://restcountries.com/v3.1/name/{country}`
- **Method**: GET
- **Description**: Fetches country details including the flag.

### Currency Converter API

- **Endpoint**: `https://api.exchangerate-api.com/v4/latest/{currency_code}`
- **Method**: GET
- **Description**: Fetches the latest currency conversion rates.

## Contact

Your Name - pk656527@gmail.com

Project Link:https://github.com/pawankumarsaw/Currency-Converter.git

