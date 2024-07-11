<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil - White Hat</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #1e272e;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        #loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, #1e272e 0%, #111 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 1;
            z-index: 2;
            color: #fff;
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
                display: none;
            }
        }

        #loader .progress-container {
            width: 150px;
            height: 150px;
            position: relative;
        }

        #loader .progress-circle {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: conic-gradient(#3498db 0%, #1e272e 0% 50%, #3498db 0%);
            transform: rotate(-90deg);
            position: absolute;
            clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
        }

        #loader .filler-circle {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #1e272e;
            position: absolute;
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            transform-origin: 50% 50%;
        }

        #loader .progress-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 24px;
            font-weight: bold;
        }

        #loader .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.9);
            border-top: 4px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        .profile-container {
            text-align: center;
            background-color: #3498db;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            animation: fadeInUp 1s ease-out;
            color: #fff;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }

        h1 {
            color: #2c3e50;
            margin-top: 10px;
            font-size: 24px;
        }

        p {
            color: #34495e;
            margin-top: 8px;
            font-size: 16px;
        }
    </style>
</head>
<body>

    <div id="loader">
        <div class="progress-container">
            <div class="progress-circle"></div>
            <div class="filler-circle"></div>
            <div class="progress-text">Loading... 0%</div>
            <div class="spinner"></div>
        </div>
    </div>

    <div class="profile-container">
        <img class="profile-image" src="https://ingrammicrolink.com/wp-content/uploads/2016/10/HiReswhitehat.png" alt="White Hat Image">
        <h1>yxxx777</h1>
        <p>deface by yxxx777</p>
    </div>

    <script>
        // Simulate a delay for demonstration purposes
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 2000); // Change 5000 to your actual loading time in milliseconds

        // Update progress text
        const progressText = document.querySelector('.progress-text');
        const startTime = Date.now();

        function updateProgress() {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / 2000, 1); // 5000 is the total loading time in milliseconds

            progressText.textContent = `Loading... ${Math.round(progress * 100)}%`;

            if (progress < 1) {
                requestAnimationFrame(updateProgress);
            }
        }

        updateProgress();
    </script>
</body>
</html>
