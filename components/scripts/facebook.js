import Script from 'next/script'

export default function FacebookPlugin({title, children}) {
  return (
	<div className="facebookBox">
        <div id="fb-root"></div>
        <Script id="FacebookPlugin">
        {`
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=367657166699674";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        `}
        </Script>
        <div className="fb-like-box" data-href="http://www.facebook.com/SolidSoundfm" data-width="350px" data-height="480px" data-colorscheme="light" data-show-faces="true" data-header="true" data-stream="false" data-show-border="true"></div>
	</div>
	)
}
