# Freelancers Network 🌐

<div align="center" style="margin-bottom: 2rem; margin-top: 2rem; font-size: 1.2rem;">
    <p>The world’s first sustainable freelance ecosystem with a "Sales-as-a-Service" core model.</p>
    <a href="https://freelancers.network">Go to the Website</a>
    <br />
    <br />
</div>


## 🚀 The Vision

**Freelancers Network** is a self-sustainable, not-for-profit, open-source platform. It is provided by Founders enterprise from the Kingdom of Bahrain.

Most freelance platforms fail because creators are often brilliant at their craft but struggle with sales. We bridge this gap by introducing the **Seller** role—professional salespersons who hunt for global clients and bring them to verified local creators.

### The Innovation

* **0% Platform Commission:** Unlike Upwork or Fiverr, the network takes nothing from your hard-earned money.
* **Direct Sales Commissions:** Sellers earn a negotiated commission for their effort in client acquisition.
* **Sponsorship Model:** Operational costs are covered 100% by corporate and government sponsorships.
* **Human-Verified:** Every Creator and Seller is interviewed by a Moderator to ensure high-quality delivery and professional ethics.

---

## 👥 User Roles

| Role | Responsibility |
| --- | --- |
| **Seller** | Sales professionals who source clients. |
| **Creator** | Experts in App Development or Multimedia. |
| **Client** | Entities/individuals seeking high-quality talent. |
| **Moderator** | Admins who verify users and manage the payouts. |

---

## 🛠️ Tech Stack

Built for the "Edge" using modern, high-performance tooling:

* **Frontend:** [Vue 3](https://vuejs.org/) (Composition API) with [Vike](https://vike.dev/) for SSR/SSG.
* **Backend:** [Hono](https://hono.dev/) (Ultra-fast web framework for Cloudflare Workers).
* **Styling:** [TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) for a clean, accessible UI.
* **Auth:** [Auth.js](https://authjs.dev/) (Security first with TypeScript integration).
* **Database:** [Cloudflare D1](https://developers.cloudflare.com/d1/) (Edge-native SQL database).
* **Payments:** [Tap Payments](https://www.tap.company/) (Manual escrow and payout).

---

## 🏗️ Getting Started

### Prerequisites

* Node.js (LTS)
* Cloudflare Wrangler CLI (`npm install -g wrangler`)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-org/freelancers-network.git
cd freelancers-network

```


2. **Install dependencies:**
```bash
npm install

```


3. **Setup Environment:**
Copy `.env.example` to `.env` and fill in your AuthJS secrets and Tap Payments credentials.
4. **Database Migration:**
```bash
npx wrangler d1 migrations apply freelancers-db --local

```


5. **Run Development Server:**
```bash
npm run dev

```



---

## 🛡️ Governance

The platform is operated by **Freelance Founders for Business Systems** in the Kingdom of Bahrain.

### Manual Escrow Flow

1. **Client** pays the project amount to the Network's secure account via Tap Payments.
2. **Moderator** confirms the deposit and marks the project as "Active."
3. **Creator** delivers the work.
4. Once the Client approves, **Moderator** manually transfers the split:
    - **80%** to the Creator.
    - **20%** to the Seller.


---

## 🤝 Contributing

We love contributors! As an AGPL-3.0 project, any improvements you make must be shared back with the community.

1. Check the [Issues](https://github.com/founders-bh/freelancers-network/issues) tab for "Good First Issue" tags.
2. Join our **Telegram Group** to discuss features with the core team.

* **Inquiries:** hello@founders.bh
* **Website:** [freelancers.network](https://freelancers.network)


---

## 📄 License

Copyright (C) 2026 Freelance Founders for Business Systems.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, version 3.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received [a copy of the GNU Affero General Public License along with this program](./LICENSE). If not, see <https://www.gnu.org/licenses/>.
