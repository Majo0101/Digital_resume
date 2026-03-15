<?php
// Database credentials
$host = '__DB_HOST__';
$dbname = '__DB_NAME__';
$username = '__DB_USERNAME__';
$password = '__DB_PASSWORD__';

// API key for authentication
$apiKey = '__API_KEY_GALL__';

// Language filter
$language = 'EN';

try {
      // Connect to the database
      $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // Set the API key as a request header
      if (!isset($_GET['apiKey']) || $_GET['apiKey'] !== $apiKey) {
            throw new Exception('Invalid API key');
      }

      $language = isset($_GET['language']) ? $_GET['language'] : 'EN';

      // Prepare and execute the SQL query
      $stmt = $pdo->prepare("SELECT bm_gall.id, bm_gall.`date`, bm_gall.title, bm_gall.infoText, bm_gall.provider, bm_gall.verifyUrl, CONCAT(bm_gall.prefix, '', bm_gall.image) AS image, CONCAT(bm_gall.prefix, '', bm_gall.thumbnail) AS thumbnail FROM bmcode_db.bm_gall WHERE bm_gall.lang =:language;");
      $stmt->bindParam(':language', $language);
      $stmt->execute();

      // Fetch the results as an associative array
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

      // Return the results as JSON
      header('Content-Type: application/json; charset=utf-8');
      echo json_encode($results, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
      // Handle database connection errors
      echo 'Database Error: ' . $e->getMessage();
} catch (Exception $e) {
      // Handle other errors
      echo 'Error: ' . $e->getMessage();
}
?>