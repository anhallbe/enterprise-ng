import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-inspector-dialog',
  templateUrl: './inspector-dialog.component.html',
  styleUrls: ['./inspector-dialog.component.css']
})
export class InspectorDialogComponent implements OnInit {

  @Input() samplePath: string;

  sources: SourceFiles = {};

  constructor(private readonly httpClient: HttpClient) { }

  async ngOnInit() {
    const path = this.samplePath;
    if (!path) {
      throw new Error('samplePath is not set.');
    }
    this.sources.html = await this.getSourceFile(path, 'html');
    this.sources.css = await this.getSourceFile(path, 'css');
    this.sources.typescript = await this.getSourceFile(path, 'ts');
  }

  private async getSourceFile(path: string, extension: SourceFileExtension): Promise<string> {
    const sourceFilePath = `sourcefiles/${path}.demo.${extension}`;
    return this.httpClient.get(sourceFilePath, { responseType: 'text' }).pipe(
      catchError(err => {
        console.debug('Failed to get source file at', sourceFilePath, err);
        return of('');
      }),
    ).toPromise();
  }
}

type SourceFileExtension = 'html' | 'ts' | 'css';
interface SourceFiles {
  html?: string;
  css?: string;
  typescript?: string;
}
