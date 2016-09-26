package main

import(
  "log"
  "net/http"
  "io/ioutil"
  "os"

  "github.com/labstack/echo"
  "github.com/labstack/echo/engine/standard"
  "github.com/labstack/echo/middleware"
)

func getImages(c echo.Context) error {
    f, err := ioutil.ReadFile("images.json")
    if err != nil {
      return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
    }

  	return c.JSONBlob(http.StatusOK, f)
}

func main() {
  port := os.Getenv("PORT")
  if port == "" {
    port = "9000"
  }
  log.Printf("Small server for images...serving on port :%s by the way\n", port)

  // Echo instance
  e := echo.New()

  // Middleware
  e.Use(middleware.Logger())

  e.Use(middleware.GzipWithConfig(middleware.GzipConfig{
      Level: 5,
    }))

  e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
    AllowOrigins: []string{"*"},
    AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType},
    AllowMethods: []string{echo.GET, echo.OPTIONS, echo.POST},
  }))

  // Route => handler
  e.GET("/images", getImages)

  // Start server
  e.Run(standard.New(":" + port))
}
