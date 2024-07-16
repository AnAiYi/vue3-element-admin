### PC端项目搭建

* 1. 项目初始化

  ```bash
  npm init vite@latest vue3-element-admin --template vue-ts
  
  ```

* 2. src路径别名配置

  ```
  相对路径别名配置，使用@代替src
  ```

* 3. unplugin 自动导入

  ```
  通过额外的插件unplugin-auto-import 和 unplugin-vue-components 来导入要使用的Api和组件；避免多个页面重复引入；
  ```

* 4. 整合Element Plus

  ```
  安装UI组件库Element Plus：
  安装自动导入Icon依赖
  ```

* 5. 整合SVG图标

  ```
  通过vite-plugin-svg-icons插件整合Iconfont第三方图标库实现本地图标
  ```

* 6. 整合SCSS

  ```
  一款CSS预处理语言，预处理语言通常用于简化代码编写；
  示例：
  CSS预处理器：Less、Sass等，扩展了CSS功能，提供了变量、嵌套、Mixin功能，生成标准的CSS文件供浏览器解析；
  JavaScript预处理器：TypeScript代码转换为JavaScript，编写时提供了类型检查和高级特性，并最终生成可执行的JavaScript代码；
  ```

* 7. 整合UnoCSS

  ```
  UnoCSS是一个具有高性能且极具灵活性的即时原子化CSS引擎
  ```

* 8. 整合Pina

  ```
  状态管理库，允许跨组件或者页面共享状态
  ```

* 9. 环境变量

  ```
  区分开发、测试、生产等环境的变量
  ```

* 10. 反向代理解决跨域

  ```
  浏览器同源策略：协议、域名、和端口相同则为同源；
  浏览器会限制非同源请求读取响应结果；
  本地开发: 通过Vite配置反向代理解决浏览器跨域问题
  生产环境: 通过nginx配置反向代理
  ```

* 11. 整合Axios

  ```
  Axios基于Promise可以用于浏览器和node.js的网络请求库
  ```

* 12. vue-router 动态路由

  ```
  动态路由: 需要用户登录，根据用户拥有的角色进行权限校验后进行初始化
  ```

* 13. 按钮权限

  ```
  除了Vue内置的一系列指令外，可以通过自定义指令的方式实现按钮权限控制
  ```

* 14. 国际化
      1. Element-Plus 国际化
      2. vue-i18n 自定义国际化

  ```
  国际化分为两个部分: Element Plus 框架国际化（官方提供了国际化方式）和自定义国际化（通过vue-i18n 国际化插件）
  i18n: internationalization（国际化）
  ```

* 15. 暗黑模式

  ```
  参考官方文档，可启用
  ```

* 16. 组件封装
      1. wangEditor 富文本
      2. Echarts 图表
      3. 图标选择器

* 17. 规范配置
      1. 代码统一规范
         1. Eslint
         2. Stylelint
         3. Prettier
      2. Git提交规范
         1. Husky + Lint-stage 整合实现Git提交前代码规范检测/格式化
         2. Husky + Commitlint + Commitizen + cz-git 整合实现生成规范化且高度自定义的Git commit message

* 18. 启动部署
      1. 项目启动
      2. 项目部署

  ```
  项目运行&项目打包，使得本地和线上都能进行访问
  ```

* 19. FAQ(Frequently Asked Questions: 常见问题解答)
      1. defineProps is not defined
      2. Vite 首屏加载慢（白屏久）