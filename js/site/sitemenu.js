/* Array of image URLs to randomly set as the page top photo*/
var pics = [
    "./images/Panorama/fremont_pan.png",
    "./images/Panorama/utahcounty_pan.png",
    "./images/Panorama/utahcounty2_pan.png",
    "./images/Panorama/sundance_pan.png",
    "./images/Panorama/sundance2_pan.png",
    "./images/Panorama/snowcanyon_pan.png",
    "./images/Panorama/lights_pan.png",
    "./images/Panorama/maple_pan.png",
    "./images/Panorama/payette_pan.png",
    "./images/Panorama/timp_pan.png",
    "./images/Panorama/cu_pan.png",
    "./images/Panorama/granite_pan.png",
    "./images/Panorama/badger_pan.png",
    "./images/Panorama/library_pan.png",
    "./images/Panorama/buffalo_pan.png",
    "./images/Panorama/gsl_pan.png",
    "./images/Panorama/moab_pan.png",
    "./images/Panorama/uofu_snow_pan.png",
    "./images/Panorama/hobble_pan.png",
    "./images/Panorama/cross_pan.png",
    "./images/Panorama/soldier_pan.png",
    "./images/Panorama/riverbottoms_pan.png",
    "./images/Panorama/slc_pan.png",
    "./images/Panorama/bflat_pan.png",
    "./images/Panorama/utahlake_pan.png",
    "./images/Panorama/goes16_pan.png",
    "./images/Panorama/SF_pan.png",
    "./images/Panorama/brianhead_pan.png",
    "./images/Panorama/eclipse_pan.png",
    "./images/Panorama/aspen_pan.png",
    "./images/Panorama/aspen2_pan.png",
    "./images/Panorama/glacier_pan.png",
    "./images/Panorama/mesa_verde_pan.png",
    "./images/Panorama/mesa_verde2_pan.png",
    "./images/Panorama/landscape_pan.png",
];


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var idx = getRandomInt(0, pics.length - 1)

function change_title_pic() {
    var idx = getRandomInt(0, pics.length - 1)
    document.getElementById("title_pic").src = pics[idx];
}

document.write('<script src="js/site/CurrentTemp.js"></script>')

/*Get the URL. We don't want to display the top picture on some pages*/
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

var no_banner_image = ['home.html',
                       'photo_viewer.php',
                       'photo_viewer2.php',
                       'photo_viewer_v1.php',
                       'photo_viewer_v2.php',
                       'photo_viewer_v3.php',
                       'photo_viewer_fire.php',
                       'hrrr_custom.html',
                       'ts_multistations.cgi',
                       'roses.cgi',
                       'Pando_Failure.html',
                       'photo_viewer_fire.cgi',
                       'photo_viewer_golf.cgi',
                       'hrrr_spread_viewer.cgi',
                       'glm_accumulation_viewer.cgi',
                       'hrrr_download.cgi',
                       'hrrr_FAQ.html',
                       'hrrr_download_register.html',
                       'hrrr_download_register.cgi',
                       'hrrr_script_tips.html',
                       'generic_AWS_download.cgi',
                       '', /*No banner if the page is index.html*/
                      ];

if (no_banner_image.indexOf(filename)<0) {
    document.write('<div class=""><img title="click me" id="title_pic" src="' + pics[idx] + '" onclick="change_title_pic();" width="100%"></div>');
}


document.write('\
<nav class="navbar navbar-inverse" style="border-radius:0;margin:0;">\
        <div class="container-fluid">\
            <div class="navbar-header">\
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </button>\
\
                <!--KBKB Logo-->\
                <a href="./home.html">\
\
                    <img style="width:50px;height:50px;vertical-align:middle" src="https://home.chpc.utah.edu/~u0553130/Brian_Blaylock/images/WeatherBalloon.gif" align="left">\
\
                </a>\
\
            </div>\
            <div class="collapse navbar-collapse" id="myNavbar">\
                <ul class="nav navbar-nav">\
                    <li><a href="https://home.chpc.utah.edu/~u0553130/Brian_Blaylock/home.html">Home</a></li>\
\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Research <span class="caret"></span></a>\
                        <ul class="dropdown-menu">\
                            <li><a href="https://home.chpc.utah.edu/~u0553130/Brian_Blaylock/PhD.html "><i class="fa fa-graduation-cap fa-fw" ></i> PhD</a></li>\
                            <li><a href="https://home.chpc.utah.edu/~u0553130/Brian_Blaylock/MS.html "><i class="fa fa-graduation-cap fa-fw" ></i> MS</a></li>\
                            <hr>\
                            <li class="dropdown-header">External Links</li>\
                            <li><a href="http://www.firescience.gov/" target="research "><i class="fab fa-gripfire fa-fw"></i> JFSP</a></li>\
                            <li><a href="http://meso2.chpc.utah.edu/aq/ " target="research "><i class="fa fa-cloud fa-fw" ></i> Air Quality</a></li>\
                            <li><a href="http://meso2.chpc.utah.edu/aq/cgi-bin/gslso3s_home.cgi" target="research "><i class="fa fa-cloud fa-fw" ></i> GSLSO<sub>3</sub>S</a></li>\
                            <li><a href="http://esrl.noaa.gov/csd/projects/songnex/ " target="research "><i class="fa fa-cloud fa-fw" ></i> SONGNEX</a></li>\
                            <li><a href="http://www.inscc.utah.edu/~u0198116/uintahbasin.html " target="research "><i class="fa fa-cloud fa-fw" ></i> UBOS</a></li>\
                            <li><a href="http://www.nserc.und.edu/sarp/sarp-2009-2013/2013/sarp-2013-student-presentation-videos/la-air-quality-group/meteorological-influences-on-surface-ozone-in-the-los-angeles-basin " target="research "><i class="fa fa-plane fa-fw" ></i> SARP </a></li>\
                            <li><a href="https://home.chpc.utah.edu/~hoch/MATERHORN_experiment.html " target="research "><i class="fa fa-cloud fa-fw" ></i> MATERHORN</a></li>\
                        </ul>\
                    </li>\
\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Web Tools <span class="caret"></span></a>\
                        <ul class="dropdown-menu">\
                            <li><a href="../Camera_Display "><i class="fa fa-video fa-fw" ></i>  Camera Display</a></li>\
                            <hr>\
                            <li class="dropdown-header">Archived S3 Data</li>\
                            <li><a href="https://home.chpc.utah.edu/~u0553130/Brian_Blaylock/hrrr_FAQ.html "><i class="fa fa-info-circle fa-fw" ></i>  HRRR Archive FAQ</a></li>\
                            <li><a href="./cgi-bin/hrrr_download.cgi"><i class="fa fa-database fa-fw" ></i>  HRRR Archive Download</a></li>\
                            <li><a href="./cgi-bin/goes16_pando.cgi"><i class="fa fa-database fa-fw" ></i>  GOES-16 on Pando</a></li>\
                            <li><a href="./cgi-bin/goes16_download.cgi"><i class="fab fa-aws fa-fw" ></i>  GOES on Amazon</a></li>\
                            <li><a href="./cgi-bin/generic_AWS_download.cgi"><i class="fab fa-aws fa-fw" ></i>  Generic AWS Download GUI</a></li>\
                            <li><a href="./cgi-bin/generic_pando_download.cgi"><i class="fa fa-database fa-fw" ></i>  Generic Pando Download GUI</a></li>\
                            <hr>\
                            <li class="dropdown-header">HRRR Web Tools</li>\
                            <li><a href="./hrrr_custom.html "><i class="far fa-map fa-fw"></i> HRRR Custom Maps</a></li>\
                            <li><a href="./hrrr_golf.html "><i class="fa fa-map-marker-alt fa-fw" ></i> HRRR Point Forecast</a></li>\
                            <li><a href="./hrrr_fires.html "><i class="fa fa-fire-extinguisher fa-fw" ></i> HRRR Fires Forecast</a></li>\
                            <li><a href="./cgi-bin/hrrrX-hrrr.cgi "><i class="fa fa-map fa-fw" ></i> HRRRx vs. HRRR Maps</a></li>\
                            <li><a href="./cgi-bin/hrrr_errors_viewer.cgi"><i class="fa fa-map fa-fw" ></i>  HRRR Error Maps</a></li>\
                            <li><a href="./cgi-bin/hrrr_osg_point_viewer.cgi"><i class="fas fa-chart-area"></i>  HRRR Percentile Demo</a></li>\
                            <li><a href="./cgi-bin/hrrr_yesterday_viewer.cgi"><i class="fas fa-calendar-alt"></i>  HRRR Yesterday</a></li>\
                            <li><a href="./cgi-bin/hrrr_events_viewer.cgi"><i class="fas fa-calendar-alt"></i>  HRRR Events</a></li>\
                            <hr>\
                            <li class="dropdown-header">MesoWest Web Tools</li>\
                            <li><a href="./cgi-bin/mesowest_current.cgi "><i class="fas fa-clock fa-fw" ></i> MesoWest Current Conditions</a></li>\
                            <li><a href="./cgi-bin/ts_multistations.cgi "><i class="fas fa-chart-line fa-fw" ></i> Multi-station Time Series</a></li>\
                            <li><a href="./cgi-bin/roses.cgi "><i class="fas fa-chart-pie fa-fw" ></i> Rose Plots</a></li>\
                            <hr>\
                            <li class="dropdown-header">Other</li>\
                            <li><a href="./cgi-bin/glm_accumulation_viewer.cgi "><i class="fa fa-globe fa-fw" ></i> GOES-16 GLM Images</a></li>\
                        </ul>\
                    </li>\
\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">WRF<span class="caret"></span></a>\
                        <ul class="dropdown-menu">\
                            <li><a href="./wrf.html ">WRF Resources</a></li>\
                            <li><a href="./hrrr.html ">Initialize with HRRR</a></li>\
                            <li><a href="./tracer.html ">Tracer Plumes</a></li>\
                            <li><a href="./lake_surgery.html ">Lake Surgery</a></li>\
                            <li><a href="./wrf_post.html ">Data Post Processing</a></li>\
                            <li><a href="https://home.chpc.utah.edu/~u0553130/Ute_WRF/"><i class="fa fa-users fa-fw" ></i> Utah WRF Users Group</a></li>\
                        </ul>\
                    </li>\
\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Code<span class="caret"></span></a>\
                        <ul class="dropdown-menu">\
                            <li class="dropdown-header"><i class="fab fa-github fa-fw" ></i> Packages</li>\
                            <li><a href="https://github.com/blaylockbk/HRRR_archive_download">HRRR-B: download HRRR data</a></li>\
                            <li><a href="https://github.com/blaylockbk/goes2go">GOES-2-Go: download GOES data</a></li>\
                            <li><a href="https://github.com/blaylockbk/SynopticPy">SynopticPy: access Synoptic API</a></li>\
                            <li><a href="https://github.com/blaylockbk/Carpenter_Workshop">Workshop: some tools I use</a></li>\
                            <hr>\
                            <li class="dropdown-header"><i class="fab fa-github fa-fw" ></i> PyBKB_v3</li>\
                            <li><a href="https://github.com/blaylockbk/pyBKB_v3">Old stuff, but still useful</a></li>\
                            <hr>\
                            <li class="dropdown-header"><i class="fa fa-code fa-fw" ></i> Other</li>\
                            <li><a href="https://github.com/blaylockbk/CHPC-Settings">CHPC Settings</a></li>\
                            <li><a href="https://github.com/blaylockbk/HorelS3-Archive">HRRR Daily Download</a></li>\
                            <li><a href="https://github.com/blaylockbk/UofU_Camera_Display">Camera Display</a></li>\
                            <li><a href="https://github.com/blaylockbk/Web-Homepage/blob/master/photo_viewer/photo_viewer.php">Image Viewer</a></li>\
                            <li><a href="https://github.com/blaylockbk/oper">Operational Scripts (defunct)</a></li>\
                            <li><a href="https://github.com/blaylockbk/Web-Homepage">This Webpage</a></li>\
                        </ul>\
                    </li>\
\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Published<span class="caret"></span></a>\
                        <ul class="dropdown-menu">\
                            <li><a href="./publications.html "><i class="fas fa-file-alt fa-fw" ></i> Publications</a></li>\
                            <li><a href="./presentations.html "><i class="fab fa-slideshare fa-fw"></i> Presentations</a></li>\
                        </ul>\
                    </li>\
\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Blogs<span class="caret"></span></a>\
                        <ul class="dropdown-menu">\
                            <li><a href="http://kbkb-wx.blogspot.com "><i class="fas fa-sun fa-fw" ></i> KBKB WX</a></li>\
                            <li><a href="http://kbkb-wx-python.blogspot.com "><i class="fa fa-code fa-fw" ></i> KBKB Python</a></li>\
                            <li><a href="http://wasatchweatherweenies.blogspot.com "><i class="far fa-snowflake fa-fw" ></i> Wasatch W. W.</a></li>\
                            <li><a href="https://blog.synopticlabs.org/ "><i class="fa fa-flask fa-fw" ></i> Synoptic Labs</a></li>\
                            <li><a href="http://cliffmass.blogspot.com"><i class="fa fa-tint fa-fw" ></i> Cliff Mass</a></li>\
                            <hr>\
                            <li class="dropdown-header">Podcasts</li>\
                            <li><a href="https://talkpython.fm"><i class="fa fa-microphone fa-fw" ></i> Talk Python to Me</a></li>\
                            <li><a href="http://www.stuffyoushouldknow.com"><i class="fa fa-microphone fa-fw" ></i> Stuff You Should Know</a></li>\
                        </ul>\
                    </li>\
\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Outreach<span class="caret"></span></a>\
                        <ul class="dropdown-menu">\
                            <li><a href="./wxMeritBadge.html ">WX Merit Badge</a></li>\
                            <li><a href="./schoolvisits.html ">School Visits</a></li>\
                            <li><a href="http://wrnscoutevent.wixsite.com/wrnscoutevent">WRN Scout Event</a></li>\
                            <li><a href="http://science.utah.edu/events/science-day.php ">UofU Science Day</a></li>\
                        </ul>\
                    </li>\
\
                    <li class="dropdown">\
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">UUNET<span class="caret"></span></a>\
                        <ul class="dropdown-menu">\
                            <li><a href="https://home.chpc.utah.edu/~u0790486/wxinfo/cgi-bin/wxmap.cgi?net=153&latcen=40.4&loncen=-111.87">Current Map</a></li>\
                            <li><a href="https://home.chpc.utah.edu/~u0790486/wxinfo/cgi-bin/wxmap_24h_precip_api.cgi?net=153&latcen=40.4&loncen=-111.87">24hr Precip Map</a></li>\
                            <li><a href="https://home.chpc.utah.edu/~u0790486/wxinfo/cgi-bin/uunet_charts.cgi">Battery Voltage</a></li>\
                            <li><a href="https://home.chpc.utah.edu/~u0790486/wxinfo/cgi-bin/current_home.cgi?asos=0&latcen=40.7626&loncen=-111.84755">Nearby Weather</a></li>\
                            <li><a href="https://home.chpc.utah.edu/~u0790486/wxinfo/uusodar2_time_series.html">Sodar Viewer</a></li>\
                            <li><a href="http://mesowest.utah.edu/cgi-bin/droman/uunet_stn_monitor.cgi">UUNET Quick Look Table</a></li>\
                            <li><a href="http://meso2.chpc.utah.edu/aq/">TRAX/KSL/Mobile Air Quality</a></li>\
                            <li><a href="https://asn.synopticdata.com/">Above Surface Network</a></li>\
                            <li><a href="http://meso1.chpc.utah.edu/mesowest_overview/#">MesoWest Group Overview</a></li>\
                        </ul>\
                    </li>\
\
                    <li class="dropdown">\
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">External Links<span class="caret"></span></a>\
                    <ul class="dropdown-menu">\
                        <li class="dropdown-header">MesoWest</li>\
                        <li><a href="http://mesowest.utah.edu/ " target="tools"><img src="./images/mesowest_icon.svg" height="14px"> MesoWest</a></li>\
                        <li><a href="https://push.synopticdata.com/monitor_network " target="tools"><img src="./images/mesowest_icon.svg" height="14px"> Synoptic Monitor</a></li>\
                        <li><a href="https://home.chpc.utah.edu/~u0790486/wxinfo/cgi-bin/wxmap_precip_total.cgi?back=24.0&latcen=40.78885994449482&loncen=-111.895751953125&net=0&zoom=8&limit=None" target="tools"><i class="fa fa-tint fa-fw" ></i>  Past 24-hr Precipitation Map</a></li>\
                        <li><a href="https://home.chpc.utah.edu/~u0790486/wxinfo/cgi-bin/wxmap_24h_peak_wind.cgi?latcen=40.78262115769851&loncen=-111.90673828125&net=0&zoom=9&limit=None" target="tools"><i class="fa fa-angle-double-right fa-fw" ></i>  Past 24-hr Peak Wind Map</a></li>\
                        <li><a href="https://home.chpc.utah.edu/~u0790486/wxinfo/cgi-bin/wxmap.cgi?net=153" target="tools"><i class="fas fa-sun fa-fw" ></i>  Current Weather Map</a></li>\
                        <li><a href="https://home.chpc.utah.edu/~u0790486/wxinfo/uusodar2_time_series.html" target="tools"><i class="fa fa-volume-up fa-fw" ></i>  Sodar</a></li>\
                        <li><a href="http://meso2.chpc.utah.edu/aq/" target="tools"><i class="fa fa-cloud fa-fw" ></i>  UU Air Quality</a></li>\
                        <li><a href="https://synopticlabs.org/demos/elevation/" target="tools"><i class="fa fa-map-marker fa-fw" ></i>  Station Elevation</a></li>\
                        <hr>\
                        <li class="dropdown-header">Satellite</li>\
                        <li><a href="http://rammb-slider.cira.colostate.edu/ " target="tools"><i class="fa fa-globe fa-fw" ></i> GOES-16 Viewer (CIRA-SLIDER)</a></li>\
                        <li><a href="https://www.star.nesdis.noaa.gov/GOES/GOES16_CONUS.php" target="tools"><i class="fa fa-globe fa-fw" ></i> GOES-16 Viewer (NESDIS)</a></li>\
                        <li><a href="http://wx.erau.edu/erau_sat/" target="tools"><i class="fa fa-globe fa-fw" ></i> GOES-16 Viewer (Embry Riddle)</a></li>\
                        <li><a href="https://worldview.earthdata.nasa.gov/ " target="tools" ><i class="fa fa-globe fa-fw" ></i> NASA World View</a></li>\
                        <li><a href="https://www.star.nesdis.noaa.gov/smcd/spb/aq/AerosolWatch/" target="tools"><i class="fab fa-gripfire fa-fw" ></i>  NESDIS STAR GOES-16 Aerosol Watch</a></li>\
                        <li><a href="http://cimss.ssec.wisc.edu/goes/goesdata.html" target="tools"><i class="fa fa-globe fa-fw" ></i>  GOES ABI Data Resources (Tim Schmit) </a></li>\
                        <hr>\
                        <li class="dropdown-header">Numerical Models</li>\
                        <li><a href="http://weather.utah.edu/ " target="tools"><i class="fa fa-globe fa-fw" ></i> weather.utah.edu</a></li>\
                        <li><a href="https://www.wrh.noaa.gov/map/" target="tools"><i class="fa fa-globe fa-fw" ></i> Weather and Hazards Data Viewer</a></li>\
                        <li><a href="https://www.xcskies.com/map " target="tools" ><img src="./images/hawk.png" height="14px"> XC Skies Forecasts</a></li>\
                        <li class="dropdown-header">Upper Air Sounding</li>\
                        <li><a href="http://weather.uwyo.edu/upperair/sounding.html" target="tools"><i class="fab fa-fly fa-fw" ></i>  Wyoming Sounding Page</a></li>\
                        <li><a href="http://www.spc.noaa.gov/exper/soundingclimo/" target="tools"><i class="fab fa-fly fa-fw" ></i>  Sounding Climo</a></li>\
                        <li><a href="http://www.spc.noaa.gov/exper/href/" target="tools"><i class="far fa-image fa-fw" ></i>  SPC HREF Viewer</a></li>\
                        <li><a href="https://ensemble.ucar.edu/index.php" target="tools"><i class="far fa-image fa-fw" ></i>  NCAR Ensemble Viewer</a></li>\
                        <li><a href="http://cimss.ssec.wisc.edu/hrrrval/" target="tools"><i class="fa fa-globe fa-fw" ></i>  HRRR Satellite Validation (CIMSS)</a></li>\
                        <hr>\
                        <li class="dropdown-header">Precipitation/Radar</li>\
                        <li><a href="http://cocorahs.org/ " target="tools"><i class="fa fa-tint fa-fw" ></i>  CoCoRaHS</a></li>\
                        <li><a href="http://weather.rap.ucar.edu/radar/" target="tools"><i class="fa fa-tint fa-fw" ></i>  Radar</a></li>\
                        <li><a href="https://gis.ncdc.noaa.gov/maps/ncei/radar" target="tools"><i class="fa fa-tint fa-fw" ></i>  NEXRAD Radar Archive</a></li>\
                        <li><a href="http://www.lightningmaps.org/" target="tools"><i class="fa fa-bolt fa-fw" ></i>  Lightning Maps</a></li>\
                        <li><a href="http://cimss.ssec.wisc.edu/severe_conv/probsev.html" target="tools"><i class="fa fa-bolt fa-fw" ></i>  ProbSevere</a></li>\
                        <hr>\
                        <li class="dropdown-header">Education</li>\
                        <li><a href="https://www.meted.ucar.edu/ " target="tools"><i class="fab fa-superpowers fa-fw" ></i>  Comet MetEd</a></li>\
                        <li><a href="http://meso1.chpc.utah.edu/NAA " target="tools"><i class="fas fa-tv fa-fw" ></i>  NAA School</a></li>\
                        <hr>\
                        <li class="dropdown-header">Air Quality</li>\
                        <li><a href="http://www.airquality.utah.gov/" target="tools"><i class="fa fa-cloud fa-fw" ></i>  DAQ Air Quality</a></li>\
                        <li><a href="https://www.ksl.com/?nid=1314" target="tools"><i class="fa fa-cloud fa-fw" ></i>  KSL Air Quality</a></li>\
                        <li><a href="http://raqms.ssec.wisc.edu/forecast/calendar/" target="tools"><i class="fab fa-gripfire fa-fw" ></i>  Real-time Air Quality Modeling System</a></li>\
                        <hr>\
                        <li class="dropdown-header">Fire</li>\
                        <li><a href="https://www.weather.gov/fire/" target="tools"><i class="fab fa-gripfire fa-fw" ></i>  weather.gov/fire</a></li>\
                        <li><a href="https://wildlandfiresmoke.net" target="tools"><i class="fa fa-globe fa-fw" ></i>  Wildland Fire Air Quality </a></li>\
                        <hr>\
                        <li class="dropdown-header">Other</li>\
                        <li><a href="https://fluid.nccs.nasa.gov/reanalysis/classic_merra2/" target="tools"><i class="fa fa-clock fa-fw" ></i>  Historical Weather (MERRA2)</a></li>\
                        <li><a href="https://www.weather.gov/abr/etforecasts" target="tools"><i class="fa fa-tint fa-fw" ></i>  Evapotranspiration</a></li>\
                    </ul>\
                    </li>\
\
                    <!--\
        <li><a href="#">Page 2</a></li>\
        <li><a href="#">Page 3</a></li>\
        -->\
                </ul>\
\
            </div>\
        </div>\
    </nav>\
');