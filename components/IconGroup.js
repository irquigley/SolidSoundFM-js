export default function IconGroup({ children }) {
  

  return (
    <>
      
      <div className="iconGroup">{children}</div>
      
      <style >
        {`
      
          .iconGroup{
            display: flex;
            justify-content: space-around;            
          }

   
          div.iconLink a span {
            display: inline-block;
            text-align:center;
            width: 100%;            
          }


          /* --- WIDE ---------------*/
          @media (min-width: 600px) {
            .iconGroup{             
                padding: 10px;
            }
            div.iconLink {
                width: 92px;
                height: 130px;                            
              }
    
              div.iconLink img {
                width: 92px;
                height: 92px;
              }
    
              div.iconLink a span {
                font-size: 13px;            
              }
    
          }

          /* --- NARROW  ---------------*/
          @media (max-width: 600px) {
            .iconGroup{             
                padding: 5px;
            }

            div.iconLink {
                width: 46px;
                height: 80px;            
              }
    
              div.iconLink img {
                width: 46px;
                height: 46px;
              }
    
              div.iconLink a span {
                font-size: 10px;            
              }    
          } 
        `}
      </style>
    </>
  );
}

