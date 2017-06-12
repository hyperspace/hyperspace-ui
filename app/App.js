import { h, Component } from 'preact'
import { ipcRenderer } from 'electron'
import ProjectList from './ProjectList'


export default class App extends Component {
  state = { items: [] };

  loadItems() {
    ipcRenderer.send('ping');
    ipcRenderer.on('pong', (store, data) => {
      console.log(store)
      console.log(data)
        this.setState({ items: data })
    });
  }

  componentDidMount() {
    this.loadItems();
  }

  render({ }, { items }) {
    return (
      <div>
        <div class="arrow"></div>
        <div class="window">
          <div class="window-content">
            <ProjectList files={items} />
          </div>

          <footer class="toolbar toolbar-footer">
            <div class="toolbar-actions">

              <button class="btn btn-default">
                Save current workspace
              </button>

              <button class="btn btn-default pull-right">
                <span class="icon icon-cog"></span> <span class="icon icon-down-open-mini"></span>
              </button>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}