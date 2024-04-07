package main

import (
	"context"
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

type Song struct {
	ID     string
	Name   string
	Artist string
	Image  string
	Audio  string
	Duration string
}

type Artist struct {
	ID   string
	Name string
}

func main() {

	db, err := createConnection()

	if err != nil {
		panic(err.Error())
	}

	db.SetMaxOpenConns(5)

	err = db.Ping()

	if err != nil {
		panic(err.Error())
	}

	err = querySongs(context.Background(), db)

	if err != nil {
		panic(err.Error())
	}

	db.Close()
}

func createConnection() (*sql.DB, error) {

	conncectionString := "root:Tortellini21@tcp(localhost:3306)/soundclover?parseTime=true"

	db, err := sql.Open("mysql", conncectionString)

	if err != nil {
		return nil, err
	}
	
	return db, err
}

func querySongs(ctx context.Context, db *sql.DB) error{

	qry := `SELECT
		s.id,
		s.name,
		s.artist
	FROM canciones s
	`
	rows, err := db.QueryContext(ctx, qry)

	if err != nil {
		return err
	}

	songs := []Song{}

	for rows.Next() {
		song := Song{}
		err := rows.Scan(&song.ID, &song.Name, &song.Artist)

		if err != nil {
			return err
		}

		songs = append(songs, song)
	}

	log.Println(songs)

	return nil
}

func addSong(ctx context.Context, db *sql.DB, id string, name string, artist string) error {

	qry := `INSERT INTO canciones(id, name, artist) VALUES (?, ?, ?)`

	_, err := db.ExecContext(ctx, qry, id, name, artist)

	if err != nil {
		return err
	}

	return nil
}