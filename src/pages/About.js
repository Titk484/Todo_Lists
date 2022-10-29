import React from 'react';
import '../css/About.css';
import logo from '../image/avaFa.jpg';

function About() {
  return (
    <div className="wrapper">
      <div className="resume">
        <div className="left">
          <div className="img_holder">
            <img src={logo} alt="ava" />
          </div>
          <div className="contact_wrap pd">
            <div className="title">Contact</div>
            <div className="contact">
              <ul>
                <li>
                  <div className="li_wrap">
                    <div className="icon">
                      <i className="fa-solid fa-mobile-screen-button" />
                    </div>
                    <div className="text">0902812690</div>
                  </div>
                </li>
                <li>
                  <div className="li_wrap">
                    <div className="icon">
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <div className="text">4601104089@student.hcmue.edu.vn</div>
                  </div>
                </li>
                <li>
                  <div className="li_wrap">
                    <div className="icon">
                      <i className="fa-solid fa-signs-post" />
                    </div>
                    <div className="text">Hoc Mon, Ho Chi Minh</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="skills_wrap pd">
            <div className="title">Skills</div>
            <div className="skills">
              <ul>
                <li>
                  <div className="li_wrap">
                    <div className="icon">
                      <i className="fa-solid fa-copyright" />
                    </div>
                    <div className="text">C++</div>
                  </div>
                </li>
                <li>
                  <div className="li_wrap">
                    <div className="icon">
                      <i className="fa-solid fa-copyright" />
                    </div>
                    <div className="text">C#</div>
                  </div>
                </li>
                <li>
                  <div className="li_wrap">
                    <div className="icon">
                      <i className="fa-brands fa-html5" />
                    </div>
                    <div className="text">HTML</div>
                  </div>
                </li>
                <li>
                  <div className="li_wrap">
                    <div className="icon">
                      <i className="fa-brands fa-css3-alt" />
                    </div>
                    <div className="text">CSS</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="hobbies_wrap pd">
            <div className="title">Hobbies</div>
            <div className="hobbies">
              <ul>
                <li>
                  <div className="li_wrap">
                    <div className="icon">
                      <i className="fa-solid fa-film" />
                    </div>
                    <div className="text">Phim ảnh</div>
                  </div>
                </li>
                <li>
                  <div className="li_wrap">
                    <div className="icon">
                      <i className="fa-solid fa-music" />
                    </div>
                    <div className="text">Âm nhạc</div>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="right">
          <div className="header">
            <div className="name">Nguyễn Tuấn Kiệt</div>
            <div className="about">
              Là một sinh viên năm ba mang bao khát vọng chuẩn bị bước ra
              trường. Tuy gặp phải nhiều khó khăn thử thách nhưng vẫn cố gắng
              hết mình đi về phía trước. Mục tiêu là trở thành một lập trình
              viên có đầy đủ chuyên môn và là một người có ích cho xã hội.
            </div>
          </div>
          <div className="my-project">
            {/* <div className="title">Projects</div> */}

            <div className="my-project">
              <div className="title1">Projects</div>
              <div className="proj_wrap">
                <ul>
                  <li>
                    <div className="li_wrap">
                      <div className="info">
                        <h3 className="info_title">Cấu Trúc Dữ Liệu</h3>
                        <p className="info_text">
                          Đồ án đầu tiên được giao là Quản lý đặt vé máy bay
                          chạy trên code C++. Cùng với nhóm WinX có thể nói là
                          một thành công nho nhỏ nhưng vẫn còn hạn chế ở khâu
                          danh sách chuyến bay.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="li_wrap">
                      <div className="info">
                        <h3 className="info_title">
                          Lý Thuyết Đồ Thị Và Ứng Dụng
                        </h3>
                        <p className="info_text">
                          Đồ án thứ hai là phát triển ứng dụng, thực hiện trực
                          quan hai thuật toán Kruskal và Floyd. Lần đầu phải
                          thực hiện ứng dụng có giao diện để người dùng có thể
                          thao tác được nên nhóm cũng gặp rất nhiều khó khăn.
                          Cuối cùng thành quả thu được cũng rất khả quan.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="li_wrap">
                      <div className="info">
                        <h3 className="info_title">Lập Trình Trên Windows</h3>
                        <p className="info_text">
                          Đồ án thứ ba là phát triển ứng dụng Quản lý đặt vé máy
                          bay. Với kinh nghiệm từ hai đồ án trước thì có thể nói
                          đây là đứa con mà nhóm ưng ý nhất. Tuy nhiên nhóm vẫn
                          còn xử lý chưa tốt phần dữ liệu vào ra.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
