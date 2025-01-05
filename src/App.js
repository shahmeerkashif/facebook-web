import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to toggle settings menu visibility
  const settingsMenuToggle = () => {
    setSettingsMenuVisible(!settingsMenuVisible);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      {/* Navigation */}
      <nav>
        <div className="nav_left">
          <div className="div">
            f
          </div>
          <ul>
            <li><img src="https://kashanadnan.github.io/Facebook-Clone/images/notification.png" alt="notification" /></li>
            <li><img src="	https://kashanadnan.github.io/Facebook-Clone/images/inbox.png" alt="inbox" /></li>
            <li><img src="	https://kashanadnan.github.io/Facebook-Clone/images/video.png" alt="video" /></li>
          </ul>
        </div>
        <div className="nav_right">
          <div className="search_box">
            <input type="search" placeholder="Search" />
          </div>
          <div className="nav_user_icon online_icon" onClick={settingsMenuToggle}>
            <img src="	https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="profile" />
          </div>
        </div>
        {settingsMenuVisible && (
          <div className="setting_menu">
            <div 
              id="dark_btn" 
              className={isDarkMode ? 'dark_btn_on' : 'dark_btn_off'}
              onClick={toggleDarkMode}
            >
              <span></span>
            </div>
            <div className="settings_menu_inner">
              <div className="user_profile">
                <img src="	https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <a href="./user.html">See Your Profile</a>
                </div>
              </div>
              <hr />
              <div className="user_profile">
                <img src="images/feedback.png" alt="" />
                <div>
                  <p>Give Feedback</p>
                  <a href="#">Help Us To improve new design</a>
                </div>
              </div>
              <hr />
              <div className="setting_link">
                <img src="images/setting.png" className="setting_icon" alt="" />
                <a href="#">Setting & Privacy <img src="images/arrow.png" alt="" width="10px" /></a>
              </div>
              <div className="setting_link">
                <img src="images/help.png" className="setting_icon" alt="" />
                <a href="#">Help & Support <img src="images/arrow.png" alt="" width="10px" /></a>
              </div>
              <div className="setting_link">
                <img src="images/display.png" className="setting_icon" alt="" />
                <a href="#">Display & Accessibility <img src="images/arrow.png" alt="" width="10px" /></a>
              </div>
              <div className="setting_link">
                <img src="images/logout.png" className="setting_icon" alt="" />
                <a href="#">Logout <img src="images/arrow.png" alt="" width="10px" /></a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="container">
        {/* Left Sidebar */}
        <div className="left_sidebar">
          <div className="important_link">
            <a href="#">Latest News</a>
            <a href="#">Friends</a>
            <a href="#">Group</a>
            <a href="#">Marketplace</a>
            <a href="#">Watch</a>
            <a href="#">See More</a>
          </div>
          <div className="shortcut_links">
            <p>Your Shortcut</p>
            <a href=""><img src="	https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Web Developers" />Web Developers</a>
            <a href=""><img src="	https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Web Design" />Web Design</a>
            <a href=""><img src="	https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Graphic Design" />Graphic Design</a>
            <a href=""><img src="	https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Front End Developer" />Front End Developer</a>
          </div>
        </div>
        <div className="main_content">
          <div className="post_container">
            <div className="user_profile">
              <img src="	https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
              <div>
                <p>Shahmeer Kashif</p>
                <small>Public <i className="fa fa-caret-down"></i></small>
              </div>
            </div>
            <div className="post_input_container">
              <input id="input_value" placeholder="What's on Your Mind" />
              <button id="button_value">Post</button>
              <div className="add_post_link">
                <a href="#">Live Video</a>
                <a href="#">Photo/Video</a>
                <a href="#">Feeling/Activity</a>
              </div>
            </div>
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <div className="post_container">
            <div className="post_row">
              <div className="user_profile">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Pro We Are Pro You Now" />
                <div>
                  <p>Shahmeer Kashif</p>
                  <span>Sep 9, 2022, 12:50 AM</span>
                </div>
              </div>
              <a href=""><i className="fa fa-ellipsis-v"></i></a>
            </div>
            <img src="https://th.bing.com/th/id/R.ac014b4aa3176cef7fd1780708bbfeb4?rik=K3me98XPS9LO%2bw&riu=http%3a%2f%2feskipaper.com%2fimages%2famazing-landscape-wallpaper-1.jpg&ehk=FzchUXdEHi4%2febJUZ0W0PHwmQHKaVXlV2PNM4SclmQE%3d&risl=&pid=ImgRaw&r=0" alt="Feedback" className="post_img" />
            <div className="post_row">
              <div className="activity_icon">
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/like.png" alt="Like Kardo" />120</div>
                <div><img src="	https://kashanadnan.github.io/Facebook-Clone/images/comments.png" alt="Like Kardo" />65</div>
                <div><img src="https://kashanadnan.github.io/Facebook-Clone/images/share.png" alt="Like Kardo" />130</div>
              </div>
              <div className="post_profile_icon">
                <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="Profile Pic" /> <i className="fa fa-caret-down"></i>
              </div>
            </div>
            
          </div>
          <button type="button" className="our_btn">Load More</button>

          {/* Footer */}
          <footer>
            <p>Copyright 2024 - Created by Muhammad Shahmeer</p>
          </footer>
        </div>

        {/* Right Sidebar */}
        <div className="right_sidebar">
          <div className="sider_bar_title">
            <h4>Events</h4>
            <a href="#">See All</a>
          </div>
          <div className="event">
            <div className="Left_event">
              <h3>18</h3>
              <span>March</span>
            </div>
            <div className="Right_event">
              <h4>Social Media</h4>
              <p><i className="fas fa-map-marker-alt"></i> Willson Tech Park</p>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="event">
            <div className="Left_event">
              <h3>22</h3>
              <span>June</span>
            </div>
            <div className="Right_event">
              <h4>Mobile Marketing</h4>
              <p><i className="fas fa-map-marker-alt"></i> Orangi Town Karachi</p>
              <a href="#">More Info</a>
            </div>
          </div>
          <div className="sider_bar_title">
            <h4>Advertisement</h4>
            <a href="#">Close</a>
          </div>
          <div className="sider_bar_title">
            <h4>Conversation</h4>
            <a href="#">Hide Chat</a>
          </div>
          <div className="online_list">
            <div className="online_icon">
              <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="" />
            </div>
            <p>Shahmeer Kashif</p>
          </div>
          <div className="online_list">
            <div className="online_icon">
              <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="" />
            </div>
            <p>Nasir Raheem</p>
          </div>
          <div className="online_list">
            <div className="online_icon">
              <img src="https://shahmeerkashif.github.io/shah/WhatsApp%20Image%202024-10-08%20at%2002.17.09_25c72a6a.jpg" alt="" />
            </div>
            <p>Kashif Raheem</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
