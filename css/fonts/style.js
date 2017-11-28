/**
 * Created by hpro on 25/09/2017.
 */

/* Example wrapper */
.sly.wrap {
    position: relative;
    margin: 3em 0;
    direction: ltr !important;
}

/* Frame */
.sly .frame {
    height: 500px;
    overflow: hidden;
}
.sly .frame ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
}
.sly .frame ul li {
    background: #fff;
    border:1px solid #ddd;
    float: left;
    width: 275px;
    height: 100% !important;
    margin: 0 10px 0 10px;
    padding:10px;
    cursor: pointer;
    border-bottom:5px solid #ddd;
}

.sly .frame ul li img{
    margin:auto;
}

.sly .frame ul li.active {
    background: #333;
    border:1px solid #333;
    border-bottom:5px solid #333;
}

.sly .frame ul li h4{
    color:#333;
}

.sly .frame ul li.active h4 {
    color:#f1f1f1;
}


.sly .frame ul li.active a {
    color:#9ACE00;
}

/* Scrollbar */
.sly .scrollbar {
    margin: 0 0 1em 0;
    height: 2px;
    background: #ccc;
    line-height: 0;
}
.sly .scrollbar .handle {
    width: 100px;
    height: 100%;
    background: #292a33;
    cursor: pointer;
}
.sly .scrollbar .handle .mousearea {
    position: absolute;
    top: -9px;
    left: 0;
    width: 100%;
    height: 20px;
}

/* Pages */
.sly .pages {
    list-style: none;
    margin: 20px 0;
    padding: 0;
    text-align: center;
}
.sly .pages li {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 0 4px;
    text-indent: -999px;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    background: #fff;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.2);
}
.sly .pages li:hover {
    background: #aaa;
}
.sly .pages li.active {
    background: #666;
}

/* Controls */
.sly .controls { margin: 25px 0; text-align: center; }


.sly .single_client h3{
    text-align: center;
    font-size:18px;
    margin-top:20px;
    line-height: 30px;
    white-space: nowrap;
    overflow: hidden;
}

.sly .single_client h4{
    font-size:14px;
    line-height: 24px;
}
