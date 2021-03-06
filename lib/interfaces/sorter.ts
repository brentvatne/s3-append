import { Promise } from 'es6-promise';
import FileContents from '../models/file-contents';

interface ISorter extends Function {
  (files: FileContents[]): string | Promise<string>;
}

export default ISorter;
