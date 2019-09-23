# JQuery Basic Slider

This is a very basic JQuery Slider.

## Prerequisites

You need JQuery first.

```
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

## Usage

### Import Files

Then import CSS and JS files

```
<link rel="stylesheet" href="/path/to/slider.css">
<script src="/path/to/slider.js"></script>
```

### HTML Structure

This is the HTML basic Structure

```
<div id="slider-wrapper">
    <div id="slider" style="">
        <h1 id="slider-captions"></h1>
        <p id="slider-subtitles"></p>
    </div>
</div>
<div id="slider-indication"></div>
```

### CSS File

There is a few things you should modify. You may need to change the Slider Height. If you change the Height, you also need to change the background-position with the opposite of the half.

```
#slider{
	height: 300px;
	background-position: 0% -150px !important;
}
```

You can of course change whatever you want.

### JavaScript File

Variables are in the beginning of the file.

```
var img = ["https://physicsworld.com/wp-content/uploads/2019/05/NGC_2419-1024x532.jpg",
		  "https://www.gannett-cdn.com/presto/2019/01/31/USAT/da32117d-62b0-497b-b40b-e36c8163e3da-universe.jpg?width=1080&quality=50",
		  "https://wp-assets.futurism.com/2019/04/hubble-data-universe-expanding-faster-1200x630.png"];
var titles = ["Caption Title",
			 "Caption Title 2",
			 "Caption Title 3"];
var subtitles = ["Caption Body Test",
				"Caption Body 2 Test",
				"Caption Body 3 Test"];
var time = 5000;
```

* **img**: List of images's url 
* **titles**: List of Caption Titles
* **subtitles**: List of Caption Subtitles
* **time**: Time in milliseconds between 2 images


## License

You are allowed to copy, edit, redistribute and do everything with this code.
