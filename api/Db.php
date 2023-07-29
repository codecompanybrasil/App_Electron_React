<?php
    class Db {
        public $db;

        public function __construct() {
            $this->db = new SQLite3("db.sqlite");
        }

        public function getAllUsers() {
            $result = $this->db->query("SELECT * FROM users");

            $results = [];
    
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                array_push($results, $row);
            }
    
            $this->db->close();

            return $results;
        }
    }
    
?>