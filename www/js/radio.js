var _0x1955=["\x68\x74\x74\x70\x3A\x2F\x2F\x6C\x69\x76\x65\x2E\x69\x73\x73\x6F\x75\x73\x61\x2E\x6F\x72\x67\x3A\x38\x30\x30\x30\x2F\x6C\x69\x76\x65","\x69\x73\x50\x6C\x61\x79\x69\x6E\x67","\x6D\x79\x61\x75\x64\x69\x6F","\x6D\x79\x61\x75\x64\x69\x6F\x55\x52\x4C","\x70\x6C\x61\x79","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65\x49\x6E\x74\x65\x72\x76\x61\x6C","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x70\x6C\x61\x79\x42\x75\x74\x74\x6F\x6E","\x6E\x6F\x6E\x65","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x6E\x64\x69\x63\x61\x74\x6F\x72","\x62\x6C\x6F\x63\x6B","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x74\x65\x78\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x6C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\x74\x69\x6D\x65\x75\x70\x64\x61\x74\x65","\x63\x75\x72\x72\x65\x6E\x74\x54\x69\x6D\x65","\x3A","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x65\x72\x72\x6F\x72","\x6D\x79\x61\x75\x64\x69\x6F\x20\x45\x52\x52\x4F\x52","\x6C\x6F\x67","\x63\x61\x6E\x70\x6C\x61\x79","\x6D\x79\x61\x75\x64\x69\x6F\x20\x43\x41\x4E\x20\x50\x4C\x41\x59","\x77\x61\x69\x74\x69\x6E\x67","\x73\x74\x6F\x70\x42\x75\x74\x74\x6F\x6E","\x70\x6C\x61\x79\x69\x6E\x67","\x65\x6E\x64\x65\x64","\x73\x74\x6F\x70","\x53\x74\x72\x65\x61\x6D\x69\x6E\x67\x20\x66\x61\x69\x6C\x65\x64\x2E\x20\x50\x6F\x73\x73\x69\x62\x6C\x79\x20\x64\x75\x65\x20\x74\x6F\x20\x61\x20\x6E\x65\x74\x77\x6F\x72\x6B\x20\x65\x72\x72\x6F\x72\x2E\x20\x52\x65\x74\x72\x79\x3F","\x63\x6F\x6E\x66\x69\x72\x6D","\x70\x61\x75\x73\x65","","\x6D\x65\x73\x73\x61\x67\x65","\x30"];var radio={myaudioURL:_0x1955[0],myaudio:null,isPlaying:false,readyStateInterval:null,playButton:null,stopButton:null,activityIndicator:null,textPosition:null,play:function (){radio[_0x1955[1]]=true;radio[_0x1955[2]]= new Audio(radio[_0x1955[3]]);radio[_0x1955[2]][_0x1955[4]]();radio[_0x1955[5]]=setInterval(function (){if(radio[_0x1955[2]][_0x1955[6]]<=2){radio[_0x1955[9]][_0x1955[8]][_0x1955[7]]=_0x1955[10];radio[_0x1955[11]][_0x1955[8]][_0x1955[7]]=_0x1955[12];radio[_0x1955[14]][_0x1955[13]]=_0x1955[15];} ;} ,1000);radio[_0x1955[2]][_0x1955[19]](_0x1955[16],function (){var _0x96a1x2=parseInt(radio[_0x1955[2]][_0x1955[17]]%60);var _0x96a1x3=parseInt((radio[_0x1955[2]][_0x1955[17]]/60)%60);var _0x96a1x4=parseInt(((radio[_0x1955[2]][_0x1955[17]]/60)/60)%60);if(radio[_0x1955[1]]&&radio[_0x1955[2]][_0x1955[17]]>0){radio[_0x1955[14]][_0x1955[13]]=pad2(_0x96a1x4)+_0x1955[18]+pad2(_0x96a1x3)+_0x1955[18]+pad2(_0x96a1x2);} ;} ,false);radio[_0x1955[2]][_0x1955[19]](_0x1955[20],function (){console[_0x1955[22]](_0x1955[21]);} ,false);radio[_0x1955[2]][_0x1955[19]](_0x1955[23],function (){console[_0x1955[22]](_0x1955[24]);} ,false);radio[_0x1955[2]][_0x1955[19]](_0x1955[25],function (){radio[_0x1955[1]]=false;radio[_0x1955[9]][_0x1955[8]][_0x1955[7]]=_0x1955[10];radio[_0x1955[26]][_0x1955[8]][_0x1955[7]]=_0x1955[10];radio[_0x1955[11]][_0x1955[8]][_0x1955[7]]=_0x1955[12];} ,false);radio[_0x1955[2]][_0x1955[19]](_0x1955[27],function (){radio[_0x1955[1]]=true;radio[_0x1955[9]][_0x1955[8]][_0x1955[7]]=_0x1955[10];radio[_0x1955[11]][_0x1955[8]][_0x1955[7]]=_0x1955[10];radio[_0x1955[26]][_0x1955[8]][_0x1955[7]]=_0x1955[12];} ,false);radio[_0x1955[2]][_0x1955[19]](_0x1955[28],function (){radio[_0x1955[29]]();if(window[_0x1955[31]](_0x1955[30])){onConfirmRetry();} ;} ,false);} ,pause:function (){radio[_0x1955[1]]=false;clearInterval(radio[_0x1955[5]]);radio[_0x1955[2]][_0x1955[32]]();radio[_0x1955[26]][_0x1955[8]][_0x1955[7]]=_0x1955[10];radio[_0x1955[11]][_0x1955[8]][_0x1955[7]]=_0x1955[10];radio[_0x1955[9]][_0x1955[8]][_0x1955[7]]=_0x1955[12];} ,stop:function (){radio[_0x1955[1]]=false;clearInterval(radio[_0x1955[5]]);radio[_0x1955[2]][_0x1955[32]]();radio[_0x1955[26]][_0x1955[8]][_0x1955[7]]=_0x1955[10];radio[_0x1955[11]][_0x1955[8]][_0x1955[7]]=_0x1955[10];radio[_0x1955[9]][_0x1955[8]][_0x1955[7]]=_0x1955[12];myaudio=null;myaudio= new Audio(radio[_0x1955[3]]);radio[_0x1955[14]][_0x1955[13]]=_0x1955[33];} };function onError(_0x96a1x6){console[_0x1955[22]](_0x96a1x6[_0x1955[34]]);} ;function onConfirmRetry(_0x96a1x8){if(_0x96a1x8==1){html5audio[_0x1955[4]]();} ;} ;function pad2(_0x96a1xa){return (_0x96a1xa<10?_0x1955[35]:_0x1955[33])+_0x96a1xa;} ;