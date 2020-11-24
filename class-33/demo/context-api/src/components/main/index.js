import React, { Component } from 'react';
import ContentFunction from '../content-function';
import ContentClass from '../content-class';
import SettingsEditor from '../settings-editor';
import ThemeEditor from '../theme-editor';
import { ThemeContext } from '../../context/theme';
import './main.scss';
export default class index extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <main className={this.context.mode}>
        <section>
          <ContentClass />
          <ContentFunction />
          <aside>
            <SettingsEditor />
            <ThemeEditor />
          </aside>
        </section>
      </main>
    );
  }
}
