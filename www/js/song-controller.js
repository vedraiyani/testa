angular.module('starter.song-controller', [])

        .controller('SongCtrl', function($scope, $stateParams, $ionicPopup, SearchSongs) {
            //$stateParams.id



            $scope.servicerooturl = cordovaEvents.servicerooturl;

            if (!cordovaEvents.isOnline) {
                /////check if downloaded
                cordovaEvents.query('SELECT * FROM download where id="' + $stateParams.id + '"', function(rows) {
                    if (!rows.length) {
                        cordovaEvents.query('SELECT * FROM record where id="' + $stateParams.id + '"', function(rows) {
                            if (!rows.length) {
                                var redirectWarn = $ionicPopup.show({
                                    template: '<i class="ion-alert-circled" style="color:red;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please check your connection..!',
                                    title: '<b>Error</b>',
                                    scope: $scope,
                                    buttons: [
                                        {
                                            text: '<b>OK</b>',
                                            type: 'button-assertive',
                                            onTap: function(e) {
                                                e.preventDefault();
                                                redirectWarn.close();
                                                location.href = 'start.html';
                                            }
                                        }
                                    ]
                                });
                            } else {
                                /////
                                $scope.songs = rows.item(0);
                                //$scope.$digest();
                            }
                        });
                    } else {
                        //////
                        $scope.songs = rows.item(0);
                        //$scope.$digest();
                    }
                });
            } else {
                SearchSongs.get('field', '*', '', '["id","=",' + $stateParams.id + ']', function(songs) {
                    $scope.song = songs[0];
                    //$scope.$digest();
                    //$scope.hideLoading();
                });
            }
            //$scope.$digest();


            ///check already bookmarked

            cordovaEvents.query('SELECT * FROM bookmark where id="' + $stateParams.id + '"', function(rows) {
                if (!rows.length) {
                    $scope.bookmarked = false;
                    $scope.$digest();
                } else {
                    $scope.bookmarked = true;
                    $scope.$digest();
                }
            });


///check already in playlist

            cordovaEvents.query('SELECT * FROM playlist where songid="' + $stateParams.id + '"', function(rows) {
                if (!rows.length) {
                    $scope.inPlaylist = false;
                    $scope.$digest();
                } else {
                    $scope.inPlaylist = true;
                    $scope.$digest();
                }
            });


            ///////play

            $scope.play = function() {

            }

            ///////bookmark
            $scope.bookmark = function() {
                if (cordovaEvents.isLoggedIn) {
                    cordovaEvents.query('SELECT * FROM bookmark where id="' + $stateParams.id + '"', function(rows) {
                        if (!rows.length) {
                            cordovaEvents.query('insert into bookmark(id,name,file,title,album,year,genre,date,cover,duration)values(' + $scope.song.id + ',"' + $scope.song.name + '","' + $scope.song.file + '","' + $scope.song.title + '","' + $scope.song.album + '",' + $scope.song.year + ',"' + $scope.song.genre + '","' + $scope.song.date + '","' + $scope.song.cover + '",' + $scope.song.duration + ')', cordovaEvents.nullHandler);
                            /*$ionicPopup.show({
                             template: '<i class="ion-checkmark-circled" style="color:yellow;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bookmarked successfully..!',
                             title: '<b>Success</b>',
                             scope: $scope,
                             buttons: [
                             {
                             text: '<b>OK</b>',
                             type: 'button-energized',
                             onTap: function(e) {
                             }
                             }
                             ]
                             });*/
                            $scope.bookmarked = true;
                            $scope.$digest();
                        }/* else {
                         var redirectWarn = $ionicPopup.show({
                         template: '<i class="ion-alert-circled" style="color:green;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already bookmarked..!',
                         title: '<b>Warning</b>',
                         scope: $scope,
                         buttons: [
                         {
                         text: '<b>OK</b>',
                         type: 'button-balanced',
                         onTap: function(e) {
                         }
                         }
                         ]
                         });
                         
                         }*/
                    });
                } else {
                    $ionicPopup.show({
                        template: '<i class="ion-alert-circled" style="color:red;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please Login..!',
                        title: '<b>Error</b>',
                        scope: $scope,
                        buttons: [
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive',
                                onTap: function(e) {

                                }
                            }
                        ]
                    });
                }
            }

            ///////mark
            $scope.unmark = function() {
                if (cordovaEvents.isLoggedIn) {
                    cordovaEvents.query('SELECT * FROM bookmark where id="' + $stateParams.id + '"', function(rows) {
                        if (rows.length) {
                            cordovaEvents.query('delete FROM bookmark where id="' + $stateParams.id + '"', cordovaEvents.nullHandler);
                            $scope.bookmarked = false;
                            $scope.$digest();
                        }
                    });
                } else {
                    $ionicPopup.show({
                        template: '<i class="ion-alert-circled" style="color:red;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please Login..!',
                        title: '<b>Error</b>',
                        scope: $scope,
                        buttons: [
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive',
                                onTap: function(e) {

                                }
                            }
                        ]
                    });
                }
            }



            //////playlist
            $scope.playlist = function() {
                if (cordovaEvents.isLoggedIn) {
                    var askPlaylist = $ionicPopup.show({
                        template: '<p>Want to create new Playlist ?</p>',
                        title: 'Please answer',
                        scope: $scope,
                        buttons: [
                            {
                                text: '<b>Yes</b>',
                                type: 'button-energized',
                                onTap: function(e) {
                                    e.preventDefault();

                                    askPlaylist.close();
                                    var createPlaylist = $ionicPopup.show({
                                        template: '<input type="text" id="newPlaylist" ng-model="newPlaylist" placeholder="Playlist...">',
                                        title: '<b>Enter playlist name:</b>',
                                        scope: $scope,
                                        buttons: [
                                            {
                                                text: '<b>Add</b>',
                                                type: 'button-energized',
                                                onTap: function(e) {
                                                    e.preventDefault();
                                                    createPlaylist.close();
                                                    newPlaylist = $("#newPlaylist").val();

                                                    ////add new playlist
                                                    cordovaEvents.query('SELECT * FROM playlist where songid="' + $scope.song.id + '" and playlistname="' + newPlaylist + '"', function(rows) {
                                                        if (!rows.length) {
                                                            cordovaEvents.query('insert into playlist(playlistname,songid,name,file,title,album,year,genre,date,cover,duration)values("' + newPlaylist + '",' + $scope.song.id + ',"' + $scope.song.name + '","' + $scope.song.file + '","' + $scope.song.title + '","' + $scope.song.album + '",' + $scope.song.year + ',"' + $scope.song.genre + '","' + $scope.song.date + '","' + $scope.song.cover + '",' + $scope.song.duration + ')', cordovaEvents.nullHandler);
                                                            $scope.inPlaylist = true;
                                                            $scope.$digest();
                                                            $ionicPopup.show({
                                                                template: '<i class="ion-checkmark-circled" style="color:yellow;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Added to Playlist successfully..!',
                                                                title: '<b>Success</b>',
                                                                scope: $scope,
                                                                buttons: [
                                                                    {
                                                                        text: '<b>OK</b>',
                                                                        type: 'button-energized',
                                                                        onTap: function(e) {
                                                                        }
                                                                    }
                                                                ]
                                                            });
                                                        } else {
                                                            $ionicPopup.show({
                                                                template: '<i class="ion-alert-circled" style="color:green;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already in playlist..!',
                                                                title: '<b>Warning</b>',
                                                                scope: $scope,
                                                                buttons: [
                                                                    {
                                                                        text: '<b>OK</b>',
                                                                        type: 'button-balanced',
                                                                        onTap: function(e) {

                                                                        }
                                                                    }
                                                                ]
                                                            });
                                                        }
                                                    });
                                                }
                                            }, {
                                                text: '<b>cancel</b>',
                                                onTap: function(e) {
                                                }
                                            }
                                        ]
                                    });
                                }
                            },
                            {
                                text: '<b>No</b>',
                                onTap: function(e) {
                                    e.preventDefault();
                                    askPlaylist.close();
                                    cordovaEvents.query('SELECT distinct playlistname FROM playlist;', function(rows) {
                                        var playlists = "";
                                        playlists += '<label class="item item-input item-select"><div class="input-label">Playlists</div>';
                                        playlists += '<select id="playlists" name="playlists">';
                                        if (rows.length) {

                                            for (var i = 0; i < rows.length; i++) {
                                                var playlistname = rows.item(i).playlistname;
                                                playlists += '<option selected value="' + playlistname + '">' + playlistname + '</option>';
                                            }
                                        }
                                        playlists += "</select></label>";

                                        var selectPlaylist = $ionicPopup.show({
                                            template: playlists,
                                            title: '<b>Select playlist:</b>',
                                            scope: $scope,
                                            buttons: [
                                                {
                                                    text: '<b>Add</b>',
                                                    type: 'button-energized',
                                                    onTap: function(e) {
                                                        e.preventDefault();
                                                        selectPlaylist.close();
                                                        playlists = $("#playlists").val();
                                                        if (playlists) {

                                                            ////add to playlist
                                                            cordovaEvents.query('SELECT * FROM playlist where songid="' + $scope.song.id + '" and playlistname="' + playlists + '"', function(rows) {
                                                                if (!rows.length) {

                                                                    cordovaEvents.query('insert into playlist(playlistname,songid,name,file,title,album,year,genre,date,cover,duration)values("' + playlists + '",' + $scope.song.id + ',"' + $scope.song.name + '","' + $scope.song.file + '","' + $scope.song.title + '","' + $scope.song.album + '",' + $scope.song.year + ',"' + $scope.song.genre + '","' + $scope.song.date + '","' + $scope.song.cover + '",' + $scope.song.duration + ')', cordovaEvents.nullHandler);
                                                                    $scope.inPlaylist = true;
                                                                    $scope.$digest();
                                                                    $ionicPopup.show({
                                                                        template: '<i class="ion-checkmark-circled" style="color:yellow;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Added to Playlist successfully..!',
                                                                        title: '<b>Success</b>',
                                                                        scope: $scope,
                                                                        buttons: [
                                                                            {
                                                                                text: '<b>OK</b>',
                                                                                type: 'button-energized',
                                                                                onTap: function(e) {
                                                                                }
                                                                            }
                                                                        ]
                                                                    });
                                                                } else {
                                                                    $ionicPopup.show({
                                                                        template: '<i class="ion-alert-circled" style="color:green;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already in playlist..!',
                                                                        title: '<b>Warning</b>',
                                                                        scope: $scope,
                                                                        buttons: [
                                                                            {
                                                                                text: '<b>OK</b>',
                                                                                type: 'button-balanced',
                                                                                onTap: function(e) {

                                                                                }
                                                                            }
                                                                        ]
                                                                    });
                                                                }
                                                            });
                                                        } else {
                                                            $ionicPopup.show({
                                                                template: '<i class="ion-alert-circled" style="color:green;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Playlist not selected..!',
                                                                title: '<b>Warning</b>',
                                                                scope: $scope,
                                                                buttons: [
                                                                    {
                                                                        text: '<b>OK</b>',
                                                                        type: 'button-balanced',
                                                                        onTap: function(e) {

                                                                        }
                                                                    }
                                                                ]
                                                            });
                                                        }
                                                    }
                                                }, {
                                                    text: '<b>cancel</b>',
                                                    onTap: function(e) {
                                                    }
                                                }
                                            ]
                                        });

                                    });
                                }
                            },
                            {
                                text: '<b>cancel</b>',
                                onTap: function(e) {
                                }
                            }
                        ]
                    });
                } else {
                    $ionicPopup.show({
                        template: '<i class="ion-alert-circled" style="color:red;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please Login..!',
                        title: '<b>Error</b>',
                        scope: $scope,
                        buttons: [
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive',
                                onTap: function(e) {

                                }
                            }
                        ]
                    });
                }
            }

            ///////remove from playlist

            $scope.removeFromPlaylist = function() {
                cordovaEvents.query('SELECT * FROM playlist where songid="' + $stateParams.id + '"', function(rows) {
                    if (rows.length) {
                        cordovaEvents.query('delete FROM playlist where songid="' + $stateParams.id + '"', cordovaEvents.nullHandler);
                        $scope.inPlaylist = false;
                        $scope.$digest();
                        $ionicPopup.show({
                            template: '<i class="ion-checkmark-circled" style="color:yellow;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Removed successfully..!',
                            title: '<b>Success</b>',
                            scope: $scope,
                            buttons: [
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-energized',
                                    onTap: function(e) {
                                    }
                                }
                            ]
                        });
                    }
                });
            }

            ///////queue
            $scope.queue = function() {

                cordovaEvents.query('SELECT * FROM queue where id="' + $stateParams.id + '"', function(rows) {
                    if (!rows.length) {
                        var d = new Date();
                        var recenttime = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                        cordovaEvents.query('insert into queue(id,name,file,title,album,year,genre,date,cover,duration,recenttime)values(' + $scope.song.id + ',"' + $scope.song.name + '","' + $scope.song.file + '","' + $scope.song.title + '","' + $scope.song.album + '",' + $scope.song.year + ',"' + $scope.song.genre + '","' + $scope.song.date + '","' + $scope.song.cover + '",' + $scope.song.duration + ',"' + recenttime + '")', cordovaEvents.nullHandler);
                        $ionicPopup.show({
                            template: '<i class="ion-checkmark-circled" style="color:yellow;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Added successfully..!',
                            title: '<b>Success</b>',
                            scope: $scope,
                            buttons: [
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-energized',
                                    onTap: function(e) {
                                    }
                                }
                            ]
                        });
                        $scope.song.recenttime = '"' + recenttime + '"';
                        media.queue.push($scope.song);
                    } else {
                        var redirectWarn = $ionicPopup.show({
                            template: '<i class="ion-alert-circled" style="color:green;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already in queue..!',
                            title: '<b>Warning</b>',
                            scope: $scope,
                            buttons: [
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-balanced',
                                    onTap: function(e) {
                                    }
                                }
                            ]
                        });

                    }
                });


            }

            ///////download
            $scope.download = function() {
                if (cordovaEvents.isLoggedIn) {
                    if (cordovaEvents.isOnline) {
                        //////

                    } else {
                        $ionicPopup.show({
                            template: '<i class="ion-alert-circled" style="color:red;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please check your connection..!',
                            title: '<b>Error</b>',
                            scope: $scope,
                            buttons: [
                                {
                                    text: '<b>OK</b>',
                                    type: 'button-assertive',
                                    onTap: function(e) {

                                    }
                                }
                            ]
                        });
                    }
                } else {
                    $ionicPopup.show({
                        template: '<i class="ion-alert-circled" style="color:red;font-size:3em;"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please Login..!',
                        title: '<b>Error</b>',
                        scope: $scope,
                        buttons: [
                            {
                                text: '<b>OK</b>',
                                type: 'button-assertive',
                                onTap: function(e) {

                                }
                            }
                        ]
                    });
                }
            }

        });
