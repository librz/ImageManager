<section>
  <h2>Description</h2>
  <p>
    A Simple Image Manger wirtten with React.<br>
    Provides functions such as Image Uploading, Searching, Deleting.<br>
    Redux is used for state management, aside from that, no 3rd party moudule is requried.<br> 
  </p>
  <p>
    一个简单的图片管理器，使用React构建。<br>
    功能有图片上传，搜索, 删除。<br>
    状态管理使用的是Redux，除此之外，不需要其他第三方模块。</br>
  </p>
</section>

<section>
  <h2>Component Tree(组件树)</h2>
  <p>App</p>
  <p>&nbsp;&nbsp;--SearchBox</p>
  <p>&nbsp;&nbsp;--ImageSelector</p>
  <p>&nbsp;&nbsp;--ImageGallery</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Image</p>
</section>

<section>
  <h2>Component Breakdown(组件说明)</h2>
  <ol>
    <li>
      <h3>SearchBox</h3>
      <ul>
        <li><strong>Desp:</strong> Search images by name</li>
        <li><strong>Underlying Html:</strong> <code> input type="search" </code></li>
        <li><strong>Event:</strong> User changes text in <em>SearchBox Component</em>, and <em>filterText</em>(global state) is updated</li>
      </ul>
    </li>
    <li>
      <h3>ImageSelector</h3>
      <ul>
        <li><strong>Desp:</strong> Select image(s) to upload</li>
        <li><strong>Underlying Html:</strong> <code> input type="file" accept=".jpg .png" </code></li>
        <li><strong>Event:</strong> User selects image(s) to upload, and <em>imgList</em>(global state)  is updated</li>
      </ul>
    </li>  
     <li>
      <h3>Image</h3>
      <ul>
        <li><strong>Desp:</strong> Individual image to display</li>
        <li><strong>Underlying Html:</strong> <code> img </code></li>
        <li><strong>Event:</strong> User clicks an image to delete that image, and <em>imgList</em>(global state)  is updated</li>
      </ul>
    </li>  
     <li>
      <h3>ImageGallery</h3>
      <ul>
        <li><strong>Desp:</strong> A list of images</li>
        <li><strong>Underlying Html:</strong> a bounch of <em>Image</em> components </li>
        <li>
          <strong>Event:</strong> This component doens't have any event on its own. <br> 
          However, when <em>onChange</em> event in <em>ImageSelector</em> or <em>onClick</em> event in <em>Image</em> is triggered,               global state <em>imgList</em> will change. When <em>onChange</em> event in <em>SearchBox</em> is triggered, global state <em>filterText</em> will change.
        </li>
        <li>
          <strong>Special Prop:</strong> imgsToDisplay<br>
          <em>ImageGallery</em> will calculate which images to display based on global state <em>imgList</em> & <em>filterText</em>.
          The result is set to a prop called <em>imgsToDisplay</em>.<br>
          One thing worth noticing is the lifecycle method <em>shouldComponentUpdate</em>.
          It'll compare <code>this.imgsToDisplay</code> to <code>nextProp.imgsToDisplay</code>.
          If the 2 lists are the same, then it will return false to avoid an unnecessary rendering.<br>
          This is particularly useful in scenarios such as this: the user uploads 2 images both contain the string "japan".
          Then <em>filterText</em> such as those <em>"J", "JA", "JAP", "JAPA", "JAPAN"</em> will make no difference
          in terms of which images should be displaied on the page. Although global state <em>filterText</em> has changed, <em>ImageGallery</em> won't waste effor rerendering.
        </li>
      </ul>
    </li>  
  <ol>
</section>
    
<section>
  <h2>State Management(状态管理)</h2>
  <p>
    Redux is used for state management, hence 2 extra modules are required: redux, react-redux. <br>
    <ul>
      State: 
      <li><strong>imgList:</strong> a list of images user had uploaded</li>
      <li><strong>filterText: </strong>text inside SearchBox</li>
    </ul>
    <ul>
      Action Type:
      <li><strong>InputText:</strong> user changes text in SearchBox, this will change <em>filterText</em></li>
      <li><strong>UploadImgs:</strong> user uploads image(s), this will add image(s) to <em>imgList</em></li>
      <li><strong>ClickImage:</strong> user clicks an image, this will delete the image, <em>imgList</em> is changed</li>
    </ul>
  </p>
</section>
