import Card from './Card';


function CardList({robots}){
  robots.map((user,i) => {
    return(
       <div>
          <Card 
          key = {i}
          id ={user.id} 
          name ={user.name} 
          email = {user.email}
          />
        </div>
    )
  })
}

export default CardList;




