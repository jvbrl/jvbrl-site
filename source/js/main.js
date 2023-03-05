try {
    fetch("https://discord-web-api.glitch.me/discord/user/435234685782589461", {
  
    }).then(res => res.json()).then(r => {
      document.getElementById('jvbrl').src = `${r.url}`  
    })
  }  catch (e) {
    console.log(e)
  }