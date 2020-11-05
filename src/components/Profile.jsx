
const Profile = () => {
    return (
      <div className = 'sidebar-item sidebar-item-2'>
      <img src ='https://i.redd.it/a0ez44uhhx911.jpg'/>
      <div className ='main'>
        <div className = 'main-item'>
          <img src ='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
        </div>
        <div className='main-description'>
          <div >
            Dmitry K.
          </div>
          <div>
          Date of Birth: 2 january <br/>
          City: Minsk <br/>
          Education: BSU '11 <br/>
          Web Site: https://it-kamasutra.com
          </div>
        </div>
      </div>

      <div>
          <div>My post</div>
          <div>your news</div>
          <div>send</div>
      </div>

      <div>
        <div>post 1</div>
        <div>post 2</div>
      </div>

    </div>
    )
}

export default Profile;