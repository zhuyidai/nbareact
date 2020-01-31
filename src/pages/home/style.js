import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 980px;
  margin: 0 auto;
  padding: 20px 0 10px 0;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .nba2020 {
    display: block;
    width: 625px;
    margin-bottom: 20px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10 px 0;
  overflow: hidden;
`;
export const TopicItem = styled.div`
  float: left;
  margin-bottom: 10px;
  line-height: 32px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin-right: 18px;
  font-size: 14px;
  .topicpic {
    display: block;
    width: 30px;
    height: 32px;
    float: left;
  }
`;

export const Toptitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  font-style: initial;
  margin-top: 20px;
`;
export const Choose = styled.div`
  margin-bottom: 10px;
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
`;
export const ListInfo = styled.div`
  .title {
  }
  .desc {
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .listpic {
    display: block;
    float: right;
    width: 60px;
    height: 60px;
  }
`;

export const RecommandItem = styled.div`
  width: 282px;
  height: 158px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  margin-bottom: 15px;
`;
export const RecommandWrapper = styled.div`
  margin: 30px 0 20px;
  width: 280px;
`;
export const Livetitle = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-style: initial;
  margin-bottom: 20px;
`;
export const WriterItem = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #1e90ff;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  overflow: hidden;

  border: 1px solid #dcdcdc;
  border-radius: 2px;
  margin: 0 0 30px 0;
`;
export const Teams = styled.div`
  float: left;
  margin: 10px 0 20px 10px;
  font-style: initial;
  color: #1e90ff;
`;
export const Wins = styled.div`
  float: right;
  margin: 10px 20px 20px 10px;
`;

export const Westteam = styled.div``;

export const Eastteam = styled.div``;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  background: #a5a5a5;
  line-height: 40px;
  margin-top: 20px;
`;

export const Backtop = styled.div`
  position: fixed;
  bottom: 250px;
  right: 40px;
  width: 60px;
  font-size: 150%;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background: #dc143c;
`;

export const Information = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
`;
