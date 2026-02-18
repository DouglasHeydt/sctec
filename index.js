<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimalist Mockup</title>
    <style>
        /* Basic Reset and Fonts */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
        }

        /* Navigation */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 5%;
            background: #fff;
            border-bottom: 1px solid #eee;
        }

        nav .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #2563eb;
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        /* Hero Section */
        header {
            text-align: center;
            padding: 80px 10%;
            background: #f9fafb;
        }

        header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
        }

        header p {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 30px;
        }

        .btn {
            background: #2563eb;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }

        /* Features Section */
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            padding: 60px 10%;
        }

        .feature-card {
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 8px;
            text-align: center;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 4