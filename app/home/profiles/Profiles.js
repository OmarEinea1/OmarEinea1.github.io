import { PureComponent } from 'react';
import { Grid, Typography, Hidden, Grow } from 'material-ui';
import { get, logo } from 'db';
import './Profiles.css';

export default class Profiles extends PureComponent {
  state = {graph: {}, github: {}, stack: {}, xda: {}};

  componentWillMount() {
    get('home/profiles').then(profiles => this.setState(profiles));
  }

  render() {
    const { state: { github, stack, xda }, props: { visible }} = this;
    return (
      <Grid container>
        <Grow in={visible} timeout={500}>
          <Grid container class="box">
            <Grid item md={3} xs={12} id="github">
              <a href="my/github" target="_blank">
                <img height="50" src={logo('gh')}/>
              </a>
              <Typography variant="subtitle1">
                <i class="fas fa-fw fa-hdd"/>
                <b>{github.repos}</b> Repositories
              </Typography>
              <Typography variant="subtitle1">
                <i class="fas fa-fw fa-user-friends"/>
                <b>{github.followers}</b> Followers
              </Typography>
              <Typography variant="subtitle1">
                <i class="fas fa-fw fa-star"/>
                <b>{github.stars}</b> Stars
              </Typography>
            </Grid>
            <Grid item md={9} xs={12} align="center">
              <Grid item style={{maxWidth: 685}}>
                <Typography variant="h5" align="center" style={{padding: '8px 0 16px'}}>
                  {github.commits} contributions last year
                </Typography>
                <div id="graph" dangerouslySetInnerHTML={{__html: github.graph}}/>
                <Typography variant="caption" align="left" id="legend">
                  Commits made by me
                  <div style={{float: 'right'}}>
                    Less
                    <ul>
                      {['#eee', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
                        .map(color => <li style={{backgroundColor: color}}></li>)}
                    </ul>
                    More
                  </div>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grow>
        <Hidden xsDown><Grid container style={{height: 4}}/></Hidden>
        <Grid container>
          <Grow in={visible} timeout={800}>
            <Grid item sm={6} xs={12}>
              <div class="box flair">
                <a href="my/stackoverflow" target="_blank">
                  <img height="45" src={logo('so')}/>
                </a>
                <Typography variant="h6">
                  <i class="fas fa-fw fa-thumbs-up"/>
                  {stack.reputation} Up Votes
                </Typography>
                <Typography variant="subtitle1">
                  <i class="fas fa-fw fa-trophy" style={{marginLeft: 2}}/> Badges
                  <b style={{color: '#c38b5f'}}>
                    <i class="fas fa-fw fa-certificate"/> {stack.bronze}
                  </b>
                  <b style={{color: '#8c9298'}}>
                    <i class="fas fa-fw fa-certificate"/> {stack.silver}
                  </b>
                  <b style={{color: '#cda400'}}>
                    <i class="fas fa-fw fa-certificate"/> {stack.gold}
                  </b>
                </Typography>
              </div>
            </Grid>
          </Grow>
          <Grow in={visible} timeout={1000}>
            <Grid item sm={6} xs={12}>
              <div class="box flair">
                <a href="my/xda-developers" target="_black">
                  <img height="45" src={logo('xda')}/>
                </a>
                <Typography variant="h6">
                  <i class="fas fa-fw fa-thumbs-up"/>
                  {xda.thanks} Thanks
                </Typography>
                <Typography variant="subtitle1">
                  <i class="fas fa-fw fa-user-edit" style={{margin: '0 3px'}}/>
                  <b>{xda.posts}</b> Posts
                  in <b>{xda.threads}</b> Threads
                </Typography>
              </div>
            </Grid>
          </Grow>
        </Grid>
      </Grid>
    );
  }
}
