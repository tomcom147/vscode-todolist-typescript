import { ITask } from "src/model/task/task";
import { describe, Suite, it } from "mocha";
import { Repository } from "src/model/task/repository";
import * as assert from "assert";

describe("Task repository", () => {

    it('初期化されたときには、２レコード含まれていること', () => {
        const repo = new Repository();
        const tasks = repo.ListTasks();
        assert.equal(tasks.length, 2);
    });

    it('１レコード追加できること', () => {
        const repo = new Repository();

        const newTasks: ITask = {
            id: 0,
            text: 'new task',
        };
        repo.AddTask(newTasks);

        const tasks = repo.ListTasks();
        assert.equal(tasks.length, 3);
        assert.notEqual(tasks.find((task: ITask): boolean => {
            return task.text === "new task";
        }), undefined)
    });

    it('タスクを完了へ更新できること', () => {
        const repo = new Repository();
        repo.DoneTask(1);
        repo.DoneTask(2);
        const tasks = repo.ListTasks();
        assert.equal(tasks.length, 0);
    })
})