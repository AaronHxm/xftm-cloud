package org.xftm;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @author : Aaron
 *
 * create at:  2020-04-08  14:22
 *
 * description: application
 */
@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class,args);
  }

//  @Configuration
//  public class DefaultController extends WebMvcConfigurerAdapter {
//
//    @Value("${spring.application.name}")
//    private String name;
//    @Override
//    public void addViewControllers(ViewControllerRegistry registry) {
//      registry.addViewController(name).setViewName("forward:/index.html");
//      registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
//      super.addViewControllers(registry);
//    }
//  }
//
//  @Configuration
//  public class WebResoucesConfig extends WebMvcConfigurationSupport
//  {
//
//    @Override
//    protected void addResourceHandlers(
//        ResourceHandlerRegistry registry
//    ) {
//      registry.addResourceHandler("/static/**").
//          addResourceLocations("classpath:/static/");
//    }
//  }
}

