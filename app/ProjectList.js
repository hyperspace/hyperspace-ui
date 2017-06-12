import { h, Component } from 'preact';
import { Header, Title, Footer, Button, ButtonGroup, NavGroup, Table } from 'preact-photon';


export default ProjectTable = ({ files }) => (
    <Table>
        <tbody>{
    		files.map( file => <ProjectItem name={file} /> )
    	}</tbody>
    </Table>
);

const ProjectItem = ({name}) => (
    <tr id="clickTest">
        <td style="width: 39px; padding-left:1.2em; padding-right:0;">

          <span style="font-size: 20px;">⭐️</span>
        </td>
        <td>
          <h3 class="title">{name}
            <div class="status"></div>
          </h3>
          <span class="description">very short description about</span>
        </td>
        <td style="width:30%; text-align:right; padding-left:0; padding-right:1.2em">
          <div class="toolbar-actions">
            <a href="" class="link">Edit</a>
            <button class="btn btn-default">Launch</button>
          </div>
        </td>
  </tr>
);

