(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),l=(i(17),i(12)),s=i(4),c=i(5),r=i(7),d=i(6),o=i(1),m=i.n(o),h=(i(18),i(2)),b=(i(19),i(20),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:a,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[i,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:n,children:"IMDB"})]})]})]})},g=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(j,Object(h.a)({},e),e.imdbId)}))})},u=i(3),v=(i(22),i(10)),p=i.n(v),O=m.a.memo((function(e){var t=e.name,i=e.value,a=e.handleChange,n=e.valid;return Object(b.jsxs)("label",{htmlFor:t,children:[Object(b.jsx)("input",{id:t,type:"text",name:t,placeholder:t,className:p()("form-control",{"is-invalid":!n},{"is-valid":n&&i}),value:i,onChange:a,autoComplete:"off"}),Object(b.jsx)("div",{className:"invalid-feedback",children:"This field is required!"}),Object(b.jsx)("div",{className:"valid-feedback",children:"Correct!"})]})})),f={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleValid:!0,imgUrlValid:!0,imdbIdValid:!0,imdbUrlValid:!0},x=function(e){Object(r.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(s.a)(this,i);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state=Object(h.a)({},f),e.handleChange=function(t){var i,a=t.target,n=a.name,l=a.value;e.setState((i={},Object(u.a)(i,n,l),Object(u.a)(i,"".concat(n,"Valid"),!0),i))},e.validate=function(e){return e.every((function(e){return e}))},e.onSubmit=function(t){t.preventDefault();var i=e.state,a=i.title,n=i.description,l=i.imgUrl,s=i.imdbId,c=i.imdbUrl,r={title:a,imgUrl:l,imdbUrl:c,imdbId:s};e.validate(Object.values(r))?(e.props.onAdd(Object(h.a)(Object(h.a)({},r),{},{description:n})),e.setState(Object(h.a)({},f))):e.setState({titleValid:!!a,imgUrlValid:!!l,imdbIdValid:!!s,imdbUrlValid:!!c})},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state,t=e.title,i=e.description,a=e.imgUrl,n=e.imdbId,l=e.imdbUrl,s=e.titleValid,c=e.imgUrlValid,r=e.imdbIdValid,d=e.imdbUrlValid;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Film data"}),Object(b.jsxs)("form",{action:"",className:"row g-3",onSubmit:this.onSubmit,children:[Object(b.jsx)(O,{name:"title",value:t,valid:s,handleChange:this.handleChange}),Object(b.jsx)("textarea",{name:"description",placeholder:"Description",className:"form-control",value:i,onChange:this.handleChange,autoComplete:"off"}),Object(b.jsx)(O,{name:"imgUrl",value:a,valid:c,handleChange:this.handleChange}),Object(b.jsx)(O,{name:"imdbId",value:n,valid:r,handleChange:this.handleChange}),Object(b.jsx)(O,{name:"imdbUrl",value:l,valid:d,handleChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add"})]})]})}}]),i}(o.Component),M=i(11),w=function(e){Object(r.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(s.a)(this,i);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={movies:M},e.addMovie=function(t){e.setState((function(e){return{movies:[t].concat(Object(l.a)(e.movies))}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(g,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(x,{onAdd:this.addMovie})})]})}}]),i}(m.a.Component);n.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.bd7ab751.chunk.js.map