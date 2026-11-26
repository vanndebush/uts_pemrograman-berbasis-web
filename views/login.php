<?php
  $username = 'root';
  $password = 'root';
  $login_status = null;

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username_input = trim($_POST['username'] ?? '');
    $password_input = trim($_POST['password'] ?? '');

    if ($username_input === $username && $password_input === $password) $login_status = 'valid';
    else $login_status = 'invalid';
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Daily Journal | Login</title>
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/favicon/favicon-16x16.png">
  <link rel="shortcut icon" href="../assets/favicon/favicon.ico">
  <link rel="manifest" href="../assets/favicon/site.webmanifest">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body class="bg-body-tertiary">
  <!-- ! S: card container -->
  <section id="login" class="login h-100">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-8">
          <div class="card bg-secondary-subtle">
            <div class="card-body">
              <div class="text-center mb-5">
                <h2 class="card-title mb-5">Login Form</h2>
                <i class="bi bi-person-circle display-1"></i>
                <p class="card-text">My Daily Journal</p>
              </div>
              <form action="" method="post" autocomplete="off">
                <div class="input-group mb-3">
                  <label for="username" class="input-group-text">@</label>
                  <input type="text" name="username" id="username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="username" autofocus>
                </div>
                <div class="input-group mb-4">
                  <label for="password" class="input-group-text"><i class="bi bi-key-fill"></i></label>
                  <input type="password" name="password" id="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password">
                </div>
                <button type="submit" class="btn btn-dark w-100 fw-bold">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php if ($login_status === 'valid') : ?>
      <div class="alert alert-success text-center position-fixed top-0 end-0 mt-3 me-3" role="alert">
        <p class="mb-0">Valid username and password</p>
      </div>
    <?php endif ?>
    <?php if ($login_status === 'invalid') : ?>
      <div class="alert alert-danger text-center position-fixed top-0 end-0 mt-3 me-3" role="alert">
        <p class="mb-0">Invalid username or password</p>
      </div>
    <?php endif ?>
  </section>
  <!-- ! E: card container -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  <script src="../assets/js/login.js"></script>
</body>
</html>