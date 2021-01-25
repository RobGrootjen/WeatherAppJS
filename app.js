window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `pq6BQ0PTW4VqrXABhOWB7kpdH3uPS9nR`;
        })
    }
});