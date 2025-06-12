# Finiti Analytics

Finiti Analytics is a modular analytics stack for monitoring cryptocurrency market data using Prometheus, Grafana, and a React-based frontend.

---

## 📁 Project Structure

This repository contains the following main components:

### 1. `exporter/` — Prometheus Exporter for CoinMarketCap

A Prometheus exporter for [CoinMarketCap](https://coinmarketcap.com/), which fetches cryptocurrency data and exposes it as Prometheus metrics.  
It includes metrics such as:

- USD prices for various cryptocurrencies
- Bitcoin price
- Trading volume
- Market capitalization


---

### 2. `front-end/` — React Frontend

A React-based web application for displaying analytics, metrics, or additional dashboard layers.  
This can be used to visualize specific queries or create custom visual components on top of your Prometheus/Grafana stack.

---

### 3. `grafana/` — Prebuilt Dashboards

Contains pre-configured Grafana dashboards tailored for crypto monitoring.  
These dashboards can be imported directly into your Grafana instance and include visualizations for:

- Bitcoin price tracking
- Market cap trends


---


