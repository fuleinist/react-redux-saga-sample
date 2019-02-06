import React from 'react';
import { connect } from 'react-redux'
import NewsItem from './NewsItem'

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}

let NewsItemList = ({ thenews }) => (
    thenews?
    <ol>{thenews.map(x=> <li key={x.id}><a href={x.url} target="_blank">{x.description}</a></li>)}</ol>:
    null
)


console.log(NewsItemList)

const mapStateToProps = (state) => ({
  thenews: state.newslist,
})

NewsItemList = connect(
  mapStateToProps,
  null
)(NewsItemList)

export default NewsItemList;


