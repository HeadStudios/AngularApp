import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-add-task-modal",
  templateUrl: "./add-task-modal.component.html",
  styleUrls: ["./add-task-modal.component.scss"],
})
export class AddTaskModalComponent {
  @Input() injusticeId: number;

  title: string = "";
  description: string = "";
  dueDate: string = "";

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  submitTask(title: string, description: string, dueDate: string) {
    const taskData = {
      title,
      description,
      due_date: dueDate,
      injustice_id: this.injusticeId,
    };

    console.log("submitTask taskData", taskData);

    //const url = `https://rrdevours.monster/api/injustices/${injusticeId}/tasks`;
    const url = `https://webhook.site/ec91efbc-0a4a-4665-9b2d-3bf26fa73693`;

    this.http.post(url, taskData).subscribe({
      next: (response) => {
        console.log("Task added successfully", response);
        this.presentToast("Task added successfully");
        this.modalController.dismiss({ taskAdded: true });
      },
      error: (error) => {
        console.error("Error adding task", error);
        this.presentToast("Error adding task");
      },
    });
  }

  close() {
    this.modalController.dismiss();
  }
}
