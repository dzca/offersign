# offersign
offersign site front page

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### commands
```
npm i element-ui -S


```

<img alt="Download the DocuSign Mobile App on the Apple App Store" title="Download the DocuSign Mobile App on the Apple App Store" style="width: 100%; max-width: 115px; margin: 0px 10px 10px 0px; float: left;" class="media-element file-default" data-delta="1" src="https://www.docusign.com/sites/default/files/apple-app-store-icon.png" width="198" height="59">

<img alt="Download the DocuSign Mobile App on Google Play" title="Download the DocuSign Mobile App on Google Play" style="width: 100%; max-width: 115px; margin: 0px 10px 10px 0px; float: left;" class="media-element file-default" data-delta="2" src="https://www.docusign.com/sites/default/files/google-play-app-store-icon.png" width="198" height="59">

<img alt="Download DocuSign for Windows from the Windows Store" title="Download DocuSign for Windows from the Windows Store" style="width: 100%; max-width: 120px; margin: 0px 10px 30px 0px; float: left;" class="media-element file-default" data-delta="3" src="https://www.docusign.com/sites/default/files/windows-app-store-icon.png" width="193" height="53">


<el-row>
  <el-col :span="10"><img src="@/assets/logo-140x80.jpg"/></el-col>
  <el-col :span="14" class='menu'>

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/services">Services</router-link>
        </el-menu-item>
        <el-menu-item index="3"><router-link to="/contacts">Contacts</router-link>
      </el-menu-item>
        <el-menu-item index="4"><router-link to="/about">About</router-link>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>


<el-row>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>

<el-row>
<el-col :span="8">
  <el-card shadow="never">
    <img src="@/assets/imgs/choice.svg" class="image">
    <div >
      <span>Choice</span>
      <div class="bottom ">
                DocuSign works with more of the applications, services, and devices brokers, agents, and clients already use.
              </div>
    </div>
  </el-card>
</el-col>
<el-col :span="8">
  <el-card shadow="never">
    <img src="@/assets/imgs/trust.svg" class="image">
    <div >
      <span>Choice</span>
      <div class="bottom ">
                DocuSign works with more of the applications, services, and devices brokers, agents, and clients already use.
              </div>
    </div>
  </el-card>
</el-col>
<el-col :span="8">
  <el-card shadow="never">
    <img src="@/assets/imgs/experience.svg" class="image">
    <div >
      <span>Choice</span>
      <div class="bottom ">
                DocuSign works with more of the applications, services, and devices brokers, agents, and clients already use.
              </div>
    </div>
  </el-card>
</el-col>
</el-row>



  <div class="header row">
    <div class="col-sm-3">

      <img src="@/assets/imgs/offersign-logo-105x60.png"/>
    </div>
    <div class="col-sm-9">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/">HOME</a></li>
        <li><a href="/service">INVENTORY</a></li>
        <li><a href="/about">CONTACT US</a></li>
      </ul>
    </div>
  </div>
