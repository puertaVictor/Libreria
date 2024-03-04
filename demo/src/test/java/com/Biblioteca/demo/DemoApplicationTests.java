package com.Biblioteca.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.JavascriptExecutor;


@SpringBootTest
class DemoApplicationTests {

    @Test
    void contextLoads() {

    }


    @Test
    void pruebaAddLibro() {
        WebDriver driver = new EdgeDriver();
        
        driver.get("http://localhost:5173/formLibro");
        driver.findElement(By.id("titulo")).sendKeys("Ciento cinco años de soledad");
        
        Select autorSelect = new Select(driver.findElement(By.id("idautor")));
        autorSelect.selectByIndex(1); 
        
        driver.findElement(By.id("descripcion")).sendKeys("100 años de soledad, esta escrito por galdós");
        
        
        Select generoSelect = new Select(driver.findElement(By.id("genero")));
        generoSelect.selectByIndex(4); 
        
        driver.findElement(By.id("leido")).click();
        
        String fechaFormateada = "1995-05-28"; 
        
        String script = "arguments[0].value = arguments[1];";
        WebElement fechaLecturaInput = driver.findElement(By.id("fechaLectura"));
        ((JavascriptExecutor) driver).executeScript(script, fechaLecturaInput, fechaFormateada);
        
        String filePath = "C:\\Users\\victo\\Desktop\\OIP.jpg";

        WebElement fileInput = driver.findElement(By.id("portada"));

        fileInput.sendKeys(filePath);
        
        driver.findElement(By.id("btnEnter")).click();
    }
    
    @Test
    void pruebaAddGenero() {
        WebDriver driver = new EdgeDriver();
        
        driver.get("http://localhost:5173/formGenero");
        driver.findElement(By.id("nombreGenero")).sendKeys("Discursos");
        driver.findElement(By.id("btnEnter")).click();       
    }

    @Test
    void pruebaAddAutor() {
        WebDriver driver = new EdgeDriver();
        
        driver.get("http://localhost:5173/formAutor");
        driver.findElement(By.id("autor")).sendKeys("Pepe Mel");
        driver.findElement(By.id("nacionalidad")).sendKeys("Austriaco");
        driver.findElement(By.id("btnEnter")).click();       
    }

    
 

}
