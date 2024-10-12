/* init that will be called by the window eventlistner */
function init()
{
    /* Var initlize and assignment for the html ids using getElementById  */
    const signUpButton=document.getElementById('signUpButton');
    const loginButton=document.getElementById('loginButton');


    /* client side js that will handle what happens when the signUpButton is clicked on the website.
        uses a async to use promise for returning and awaitiing a promise
        Initalizes new username and password to assign the inputed values from the form.
        call a fetch that will call the app.post '/signUp/' from server.js. will send the inputed username and password as body.
        if condiditon that will go ahead is the fetch request worked, that will alert the user that they successful signed up.
        else give error.
         */
    signUpButton.addEventListener('click',async()=>
    {
        const username=document.getElementById('username').value;
        const password=document.getElementById('password').value;
        const serverResponse= await fetch('/signUp',
        {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({username,password})
        });
        if(serverResponse.ok)
            {
                const serverData=await serverResponse.json();
                alert(serverData.message);
            }
        else
        {
            const errorMessage=await serverResponse.json();
            alert(errorMessage.error);
        }
    }); // end of signUpButton

    /* client side js that will handle what happens when the loginButton is clicked on the website.
        uses a async to use promise for returning and awaitiing a promise
        Initalizes new username and password to assign the inputed values from the form.
        call a fetch that will call the app.post '/login/' from server.js. will send the inputed username and password as body.
        if condiditon that will go ahead is the fetch request worked, that will alert the user that they successful logged in.
        else give error message
        */
    loginButton.addEventListener('click',async()=>
        {
            const username=document.getElementById('username').value;
            const password=document.getElementById('password').value;
            const serverResponse= await fetch('/login',
            {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({username,password})
            });
            if(serverResponse.ok)
            {
                const serverData=await serverResponse.json();
                alert(serverData.message);
                localStorage.setItem('userId', serverData.userId);
                window.location.reload;
            }
            else
            {
                const errorMessage=await serverResponse.json();
                alert(errorMessage.error);
            }
        }); // end of loginButton

}

/* event listener that will load the DOM when page is loaded. */
window.addEventListener("load",init);

