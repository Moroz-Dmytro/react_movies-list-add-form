(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var i=a(9),n=a.n(i),s=(a(17),a(12)),c=a(3),l=a(4),r=a(7),o=a(6),d=a(1),m=a.n(d),h=(a(18),a(2)),j=(a(19),a(20),a(0)),b=function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:i,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t})})]}),Object(j.jsxs)("div",{className:"content",children:[a,Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:n,children:"IMDB"})]})]})]})},g=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(b,Object(h.a)({},e),e.imdbId)}))})},u=a(5),p=(a(22),a(10)),v=a.n(p),O=m.a.memo((function(e){var t=e.name,a=e.value,i=e.handleChange;return Object(j.jsxs)("label",{htmlFor:t,children:[Object(j.jsx)("input",{id:t,type:"text",name:t,placeholder:t,className:v()("form-control",{"is-invalid":!a},{"is-valid":a}),value:a,onChange:i,autoComplete:"off"}),Object(j.jsx)("div",{className:"invalid-feedback",children:"This field is required!"}),Object(j.jsx)("div",{className:"valid-feedback",children:"Correct!"})]})})),f={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},x=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state=Object(h.a)({},f),e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;e.setState(Object(u.a)({},i,n))},e.onSubmit=function(t){t.preventDefault(),e.props.onAdd(Object(h.a)({},e.state)),e.setState(Object(h.a)({},f))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,n=e.imdbId,s=e.imdbUrl;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Film data"}),Object(j.jsxs)("form",{action:"",className:"row g-3",onSubmit:this.onSubmit,children:[Object(j.jsx)(O,{name:"title",value:t,handleChange:this.handleChange}),Object(j.jsx)("textarea",{name:"description",placeholder:"Description",className:"form-control",value:a,onChange:this.handleChange,autoComplete:"off"}),Object(j.jsx)(O,{name:"imgUrl",value:i,handleChange:this.handleChange}),Object(j.jsx)(O,{name:"imdbId",value:n,handleChange:this.handleChange}),Object(j.jsx)(O,{name:"imdbUrl",value:s,handleChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:!t||!i||!n||!s,children:"Add"})]})]})}}]),a}(d.Component),M=a(11),w=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:M},e.addMovie=function(t){e.setState((function(e){return{movies:[t].concat(Object(s.a)(e.movies))}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.movies;return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(g,{movies:e})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(x,{onAdd:this.addMovie})})]})}}]),a}(m.a.Component);n.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.56f3783c.chunk.js.map