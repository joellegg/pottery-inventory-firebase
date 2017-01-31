app.controller('HomeCtrl', function() {
  console.log('Home is where the beer is');

  // Get a reference to the storage service, which is used to create references in your storage bucket
  let storage = firebase.storage();

  // Create a storage reference from our storage service
  let storageRef = storage.ref();

  let inputElement = document.getElementById("inputFile");
  inputElement.addEventListener("change", handleFiles, false);

  function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */
    console.log("filelist[0]", fileList[0])
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });
  }

  storageRef.child('Image uploaded from iOS.jpg').getDownloadURL()
    .then(function(url) {
      var img = document.getElementById('myimg');
      img.src = url;
    }).catch(function(error) {
      // Handle any errors
    });
})
