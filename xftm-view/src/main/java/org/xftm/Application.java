package org.xftm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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

