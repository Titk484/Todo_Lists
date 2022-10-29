import React from 'react';
import '../css/Timelines.css';

function Products() {
  return (
    <div className="container">
      <div className="main-timeline">
        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">6 Years</span>
                <span className="year">2007</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Cuộc sống &amp; Học vấn</h5>
            <p className="description"> - Sinh ra ở Quảng Nam</p>
            <p className="description"> - Học tại trường Tiểu học Kim Đồng</p>
          </div>
        </div>

        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">4 Years</span>
                <span className="year">2011</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Học vấn</h5>
            <p className="description">- Học tại trường THCS Lê Hồng Phong</p>
          </div>
        </div>

        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">3 Years</span>
                <span className="year">2014</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Học vấn &amp; Võ</h5>
            <p className="description">- Học tại trường THPT Trần Cao Vân</p>
            <p className="description">- Tham gia CLB Võ cổ truyền</p>
          </div>
        </div>

        <div className="timeline">
          <div className="icon" />
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">8 Years</span>
                <span className="year">2017 - 2022</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Học vấn &amp; Hiện tại</h5>
            <p className="description">
              - Học tại trường Đại học Khoa học tự nhiên Thành phố HCM
              <p className="description">
                - Học tại trường Đại học Sư phạm Thành phố HCM
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
