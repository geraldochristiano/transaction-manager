<h1>Simple Transaction Manager</h1>

## Clone and run locally

1. Clone this repository to your machine

2. `cd` to directory and install dependencies

   ```bash
   cd transaction-manager
   npm install
   ```

3. Create a new environment `.env.local` and insert the following variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

4. Build and run the production server

   ```bash
   npm run build
   npm start
   ```

5. Optionally, run the development server
    ```bash
    npm run dev
    ```
   The website will be running on [localhost:3000](http://localhost:3000/).
