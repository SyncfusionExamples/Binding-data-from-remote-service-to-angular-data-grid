import { Component, ViewChild } from '@angular/core';
import { GridComponent, ToolbarItems, EditSettingsModel,EditService, ToolbarService, FilterService, SortService, PageService, GridModule } from '@syncfusion/ej2-angular-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [GridModule],
  providers: [EditService, ToolbarService, FilterService, SortService, PageService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: DataManager;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'http://localhost:5030/api/Orders',
      adaptor: new WebApiAdaptor()
    });

    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  }
}
