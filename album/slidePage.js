// File slidePage.js made with jAlbum 39.5.6 with LightGallery 2.0.4, album creation date 14/5/26, 13:09 
const isView= false;
const osMap = false; 
const maxNrofButtons = 3; 
const usePlaceholder= false;
const removeIndexPageCode= false;
var thumbnailHasCaption= false;
var emailBodyTextI = "Click on the link above to see the photo album I like to share with you!";
var emailSubjectI = "I like to share a photo album";
var emailBodyTextSlide = "Click on the link above to see the photo I like to share with you!";
var emailSubjectSlide = "I like to share a photo";
var emailAddresseeI= '';
var emailAddresseeSlide= '';
var descriptionInSidePanel= false;
const strCenter= "Centro";
const strInClipboard = "El portapapeles contiene enlaces a la imagen y la página web y contiene el título de la imagen.";
const showCurLoc=  false;
var moreInfoURL = "";
var showPhotoLink= false;
var showFsButton=  false;
var showTitleInImage= true;
var useFallback=false;
const preventCaptionOverlap= true;
var hideTitleMinWidth = 500;
var hideTitleInTheme = false;

var apiKeyExists = false;

var showLocationNewTab= false;

var titleVPosPercent=4;
var topButtonLeft = 6;
var topButtonTop = 20;
var topButtonWidth = 100;
var topButtonPx = false;
var topButtonIcon = false;
var useThemeAsBackground = false;
var alignmentTitleInTheme = 0;
var fixedThemeImage = false;

var menuBar = false;
var menuBootstrap = false;
var relThumbHeight = 0;
const whSlideThumbPerc = 150;
const relSlideThumbHeight = 15;

var enableVericalSwipesOnIndexPage = true;
var hideArrowsOnMobile = true;
var masonryGallery = false;
var masonryGap =30;
var masonryColsAsked =0;

var openWithInfoWindow = false;
var hamburgerBtn = true;
const use_jg = true;
const autoPlay = false;  // "Start the music automatically"
const autoPlaySlideShow = true;  // "Start slide show automatically"
var ExifButton = false;

var hideCloseButton = false;
var rowHeight_jg = 80;
var margins_jg =  20;
var border_jg =  20;
var lastRow_jg = 'center';
var captionTransparency_jg = 0.40;
var maxRowHeight_jg= '133%';
var level = 0;

var slidePageFullScreen= false;
var enableSlideShow = true;
var albumImage= 'folderimage.jpg';
var useSecureLinks= true;
var standardFontFamily= 'Verdana, Geneva, Tahoma, sans-serif';
var standardFontSize='18px';
var orgFontsize= 18;
var h1Fontsize= 24;
var orgbuttonFontsize= 20;
var orgthumbsFontSize= 14;
var resourcePath = "res";
var mapType = 'hybrid';
var initialZoom = 16;
var buttonsVisible=true;
var toggleButtonsAllowed=true;
var topButtonsVisible = true; 
var homePage = '';
var strMoreInfo= '...';
var strLessInfo= '<<';
var links_under_thumbs = false;
var enableTaps = true;
var stopAfterLastSlide = true;	
var swipesArea = 1;
var disableViewerSettings =  false;

var useGeocodingAPI = false;
//var Chrome = (navigator.appVersion.indexOf("Chrome") != -1)



var albumImageIndex = -1;

var srcImg = [
'slides/4E7739C4-901B-450F-A9F4-CDD1885AFCA2_L0_001-27_1_2026%2C%2017_00_10.jpg', 
'slides/963BE463-6654-40E8-A66A-5DA62409FB21_L0_001-28_1_2026%2C%2019_15_55.png', 
'slides/B0347C18-2D31-4FF4-8343-F0ACBC0CD1C3_L0_001-28_1_2026%2C%2019_30_36.jpg', 
'slides/IMG_7399%20%281%29.jpg', 
'slides/watermarked-42fdd6ed-1096-4e0a-a1ae-29ab1ff712aa.png', 
'slides/IMG_6938%20%281%29.jpg', 
'slides/foto.png', 
'slides/Eva%20Proyecto.png', 
'slides/Sustancia%20Digital%20%281%29.png', 
'slides/Sustancia%20Digital.png', 
];
const nrofImages = '10';
const skipIndexPage = false;
var maxThumbHeight = 80;
var maxThumbWidth = 120; 

const downloadLink= false;



 // -- Start properties block --


const counterFieldUsed= false;

var fileCategory = [
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
  'image',
];
var wImg = [
864,
1920,
1920,
1440,
788,
1920,
1018,
1920,
1920,
1920,
];
var hImg = [
1080,
1080,
783,
1080,
1080,
1080,
601,
1080,
1080,
1080,
];
// -- End properties block --




var GalleryIsOpen = false;

var slideType = '';  // 'image' 'iframe' 'video' 
var slideshowWasOn= false;
var startedFromIndexPage = false;
var mp4Video= false;
var widthSidePanel = 0;
var widhImageStage =  0;
var widhImageStagepx = '';
var widthSidePanelpx = '';
var specSidePanelWidth = 20;
var widthSidePanelInPercent = true;
const useSidePanel = false;
var emptyCaption = false;


function initExtra() {
  // $('body').bind('contextmenu', function(e) { 
   // return false;
  //});
    const bodyElement = document.querySelector('body');
    bodyElement.addEventListener('contextmenu', function(e) {
     e.preventDefault();
   });



}
